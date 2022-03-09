{
  module.exports = {
    check(string) { return rule(string); },
    ruleNumber: 17,
  };
}

// Rule 17: Is the length of your response *shorter* than the unicode value of the first character?
function rule(message) {

  if (message.length < message.charCodeAt(0)) {
    return true;
  }

  return false;
}
