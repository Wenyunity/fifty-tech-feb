{
  module.exports = {
    check(string) { return rule(string); },
    ruleNumber: 38,
  };
}

// Rule 38: If you remove everything up to (and including) the first space...
// are there at least 8 positions that retain the same character?
function rule(message) {
  // One word check
  if (message.indexOf(' ') < 0.5) {
    return false;
  }
  const newMessage = message.replace(new RegExp('^.+? ', 'g'), '');
  let match = 0;

  // Sum through
  for (let i = 0; i < newMessage.length - 1; i++) {
    if (newMessage[i] == message[i]) {
        match++;
        if (match > 7.5) {
          return true;
        }
    }
  }

  return false;
}
