{
  module.exports = {
    check(string) { return rule(string); },
    ruleNumber: 22,
  };
}

// Rule 22: Do you have two characters with pattern ABAB?
function rule(message) {

  if (message.length < 4) {
    return false;
  }

  for (let i = 0; i < message.length - 3; i++) {
    if (message.charAt(i) == message.charAt(i + 2) &&
          message.charAt(i + 1) == message.charAt(i + 3) &&
          message.charAt(i) != message.charAt(i + 1)) {
      return true;
    }
  }
  return false;
}
