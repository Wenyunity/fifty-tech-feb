{
  module.exports = {
    check(string) { return rule(string); },
    ruleNumber: 2,
  };
}

// Rule 2: Does the response have less than 9 e's?
function rule(message) {
  const lowerMessage = message.toLowerCase().replace(RegExp('[^e]', 'g'), '');
  if (lowerMessage.length < 9) {
    return true;
  }
  else {
    return false;
  }
}
