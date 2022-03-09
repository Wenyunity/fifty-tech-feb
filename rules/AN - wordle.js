{
  module.exports = {
    check(string) { return rule(string); },
    ruleNumber: 15,
  };
}

// Rule 15: Does your response have two words with 5 letters each that do not share letters?
function rule(message) {

  let newMessage = message.replace(new RegExp('[^A-Za-z ]', 'g'), '');
  newMessage = newMessage.split(' ').filter(len => len.length == 5);

  for (let i = 0; i < newMessage.length; i++) {
    for (let j = i; j < newMessage.length; j++) {
      let duplicate = false;
      for (let k = 0; k < newMessage[i].length; k++) {
        if (newMessage[j].indexOf(newMessage[i][k]) > -0.5) {
          duplicate = true;
          break;
        }
      }
      if (!duplicate) {
        return true;
      }
    }
  }
  return false;
}
