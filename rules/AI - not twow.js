{
  module.exports = {
    check(string) { return rule(string); },
    ruleNumber: 10,
  };
}

// Rule 10: Does your response *not* have exactly 10 words?
function rule(message) {

  const words = message.split(' ');
  if (words.length == 10) {
    return false;
  }
  return true;
}
