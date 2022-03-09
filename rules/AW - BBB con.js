{
  module.exports = {
    check(string) { return rule(string); },
    ruleNumber: 24,
  };
}

// Rule 24: If you strip the response to consonants only, is there a string of 3 of the same character?
function rule(message) {

  // Replace all characters but consonants with nothing, all uppercase.
  const newMessage = message.toUpperCase().replace(new RegExp('[^A-Z]', 'g'), '').replace(new RegExp('[AEIOU]', 'g'), '');
  for (let i = 0; i < newMessage.length - 2; i++) {
    if (newMessage.charAt(i) == newMessage.charAt(i + 1) &&
          newMessage.charAt(i) == newMessage.charAt(i + 2)) {
      return true;
    }
  }
  return false;
}
