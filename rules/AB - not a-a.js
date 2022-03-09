{
  module.exports = {
    check(string) { return rule(string); },
    ruleNumber: 3,
  };
}

// Rule 3: Does the response not start with the same character it ends with?
function rule(message) {
  if (message.charAt(0) == message.charAt(message.length - 1)) {
    return false;
  }
  else {
    return true;
  }
}
