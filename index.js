// Required Items
const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();

// json
const auth = require('./auth.json');
const userSave = JSON.parse(fs.readFileSync('./userData.json', 'utf8'));
const responseSave = JSON.parse(fs.readFileSync('./responsePassData.json', 'utf8'));
const ruleList = fs.readdirSync('./rules').filter(file => file.endsWith('.js'));
const ruleOrder = [];
const timeout = [];

for (const rule of ruleList) {
  const command = require(`./rules/${rule}`);
  ruleOrder.push(command);
}

// A log message letting me know this bot is on
client.on('ready', function() {
  console.log(`${client.user.tag} is ready!`);
});

// Message send
client.on('message', message => {

  // Only do messages in DMs
  if (message.author.bot || message.guild) {
    return;
  }

  // If message is too long, deny
  if (message.cleanContent.length > 200) {
    message.react('⛔');
    return;
  }

  if (timeout.includes(message.author.id)) {
    message.react('⏰');
    return;
  }

  // Replace extra spaces with one
  const spaceUndoubler = / +/ig;
  const filteredMessage = message.cleanContent.replaceAll(spaceUndoubler, ' ');

  // Grab the rules passed
  const ruleCount = [];
  // Grab the rules possible to unlock
  const unlockCount = [];

  // empty string check
  if (filteredMessage.length < 1) {
    message.react('❓');
    return;
  }

  // Create user data
  if (!userSave[message.author.id]) {
      userSave[message.author.id] = {
        'name': message.author.tag, 'messageCount': 0, 'messages': [{}],
        'max': 0, 'maxRules': [], 'min': 50, 'minRules': [] };
  }

  const data = userSave[message.author.id];

  // Check each rule
  for (const rule in ruleOrder) {
    const ruleX = ruleOrder[rule].check(filteredMessage);
    // React and add.
    if (ruleX) {
      // Find which rules it passes
      ruleCount.push(ruleOrder[rule].ruleNumber);
      // Save the new message onto the rule if possible.
      if (data['messages'][ruleOrder[rule].ruleNumber]) {
        // Check if the previous message is locked. If not, replace.
        if (!data['messages'][ruleOrder[rule].ruleNumber]['lock']) {
          data['messages'][ruleOrder[rule].ruleNumber] = { 'lock': false, 'statement': filteredMessage };
          unlockCount.push(ruleOrder[rule].ruleNumber);
        }
      }
      // If no initial rule, save.
      else {
        data['messages'][ruleOrder[rule].ruleNumber] = { 'num': ruleOrder[rule].ruleNumber, 'lock': false, 'statement': filteredMessage };
        unlockCount.push(ruleOrder[rule].ruleNumber);
      }
    }
  }

  // Check maximum, replace if new maximum.
  if (ruleCount.length > data['max']) {
    data['max'] = ruleCount.length;
    data['maxRules'] = ruleCount;
  }

  // Check Minimum
  if (ruleCount.length < data['min']) {
    data['min'] = ruleCount.length;
    data['minRules'] = ruleCount;
  }

  // Add one to person's messages
  data['messageCount']++;

  // Find locked rules
  const responseSet = mapResponses(data);
  const locked = checkLocks(data, responseSet);
  const [isLocked, isUnlocked] = getLocks(data);
  const responseNonUnique = getUnlock(responseSet);
  const lastText = [];
  responseNonUnique.forEach((value, key) => {
    lastText.push('`' + key.slice(0, 10) + '`: ' + value.join(', '));
  });

  const statistics = 'Messages Sent: ' + data['messageCount'] + '\r\nMin Rules (Single Message): '
      + data['min'] + '\r\nMax Rules (Single Message): ' + data['max'];

  const rulesEmbed = new Discord.MessageEmbed()
  .setColor('#00FF00')
	.setTitle('Fifty Tech February')
	.setAuthor('FTFBot')
	.setDescription(filteredMessage)
	.addFields(
		{ name: 'Passed Rules', value: (ruleCount.join(', ') || 'None'), inline: true },
		{ name: 'Possible Locks For This Message', value: (unlockCount.join(', ') || 'None'), inline: true },
		{ name: 'Newly Locked Rules', value: (locked.join(', ') || 'None'), inline: true },
    { name: 'Rules Left Per Message', value: (lastText.join('\r\n') || 'None') },
		{ name: 'Locked Rules', value: (isLocked.join(', ') || 'None') },
    { name: 'Unlocked Rules', value: (isUnlocked.join(', ') || 'None') },
    { name: 'Statistics', value: (statistics || 'None') },
	)
	.setTimestamp();

  // Send rule reply
  message.reply({ embed: rulesEmbed });

  // Save
  fs.writeFile ('./userData.json', JSON.stringify(userSave, null, 4), function(err) {
    if (err) throw err;
  });

  // Response saving
  responseSave['responses'] += 1;
  for (let i = 0; i < ruleCount.length; i++) {
    responseSave['pass'][ruleCount[i]]++;
  }

  // Save
  fs.writeFile ('./responsePassData.json', JSON.stringify(responseSave, null, 4), function(err) {
    if (err) throw err;
    console.log(data['name'] + ' has wrote a response.');
  });

  // Timeout
  timeout.push(message.author.id);

  setTimeout(timeoutSlide, 5000);
});

function timeoutSlide() {
  timeout.shift();
}

// Find which of the maps have more than one response
function getUnlock(responseMap) {
  const nonUnique = new Map;
  responseMap.forEach((value, key) => {
    if (value.length > 1) {
      nonUnique.set(key, value);
    }
  });
  return nonUnique;
}

// Find which rules are locked.
function getLocks(data) {
  const lockList = [];
  const unlockList = [];
  for (let i = 1; i < 51; i++) {
    if (data['messages'][i]) {
      if (data['messages'][i]['lock']) {
        lockList.push(i);
      }
      else {
        unlockList.push(i);
      }
    }
    else {
      unlockList.push(i);
    }
  }
  return [lockList, unlockList];
}

// Map responses to rules
function mapResponses(data) {
  const responseCount = new Map();

  // Iterate through data to get each key and check how many times it appears
  for (let i = 1; i < 51; i++) {
    if (data['messages'][i]) {
      const response = data['messages'][i]['statement'];
      if (responseCount.has(response)) {
        responseCount.get(response).push(i);
      }
      else {
        responseCount.set(response, [i]);
      }
    }
  }
  return responseCount;
}

function checkLocks(data, responseCount) {
  if (!responseCount) {
    return;
  }

  const locked = [];
  // Check if it's equal to 1; if so, lock.
  for (let i = 1; i < 51; i++) {
    if (data['messages'][i]) {
      const response = data['messages'][i]['statement'];
      // If it should be locked
      if (responseCount.get(response).length == 1) {
        // Newly locked
        if (!data['messages'][i]['lock']) {
          locked.push(i);
          data['messages'][i]['lock'] = true;
        }
      }
    }
  }

  return locked;
}

client.login(auth.token);
