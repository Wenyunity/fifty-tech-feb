{
  module.exports = {
    check(string) { return rule(string); },
    ruleNumber: 40,
  };
}

// Rule 40: Do you have more than 40 unique symbols in your response?
function rule(message) {

  let lowerMessage = message;
  let sum = 0;

  // Check all the characters
  while (lowerMessage.length > 0) {
    // Check the next character
    let currentChar = lowerMessage.charAt(0);

    // Remove all instances of that character
    // Backup in case there are these characters
    if ('\\^$.|?*+()[{'.indexOf(currentChar) > -1) {
      currentChar = '\\' + currentChar;
    }
    lowerMessage = lowerMessage.replace(RegExp(currentChar, 'g'), '');

    // Add one to characters
    sum++;
    if (sum > 40) {
      return true;
    }
  }
  return false;
}
