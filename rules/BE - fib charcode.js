{
  module.exports = {
    check(string) { return rule(string); },
    ruleNumber: 33,
  };
}

// Rule 33: Do you have three consecutive charcodes that satisfy a+b = c?
function rule(message) {
  for (let i = 0; i < message.length - 2; i++) {
    if (message.charCodeAt(i) + message.charCodeAt(i + 1) == message.charCodeAt(i + 2)) {
      return true;
    }
  }
  return false;
}
