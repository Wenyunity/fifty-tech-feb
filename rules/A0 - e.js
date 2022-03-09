{
  module.exports = {
    check(string) { return rule(string); },
    ruleNumber: 1,
  };
}

// Rule 1: Does the response have an e?
function rule(message) {
  const lowerMessage = message.toLowerCase();
  if (lowerMessage.indexOf('e') > -0.5) {
    return true;
  }
  else {
    return false;
  }
}
