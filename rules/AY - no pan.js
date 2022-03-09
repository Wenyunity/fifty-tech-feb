{
  module.exports = {
    check(string) { return rule(string); },
    ruleNumber: 26,
  };
}

// Rule 26: Is your response *not* a pangram?
function rule(message) {

  const characters = 'ZXQJVKPBCGFWMYULDRNISAHTOE';
  const newMessage = message.toUpperCase();
  for (let i = 0; i < characters.length; i++) {
    if (newMessage.indexOf(characters[i]) < -0.5) {
      return true;
    }
  }
  return false;
}
