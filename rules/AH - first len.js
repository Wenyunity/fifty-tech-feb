{
  module.exports = {
    check(string) { return rule(string); },
    ruleNumber: 9,
  };
}

// Rule 9: Is the first word length in your response *not* a divisor of the total length?
function rule(message) {

  const words = message.toUpperCase().split(' ');
  if (message.length % words[0].length == 0) {
    return false;
  }
  return true;
}
