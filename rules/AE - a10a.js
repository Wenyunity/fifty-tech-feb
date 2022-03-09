{
  module.exports = {
    check(string) { return rule(string); },
    ruleNumber: 6,
  };
}

// Rule 6: Do you have two consecutive lowercase a's with exactly 10 characters between them?
function rule(message) {

  if (message.indexOf('a') < -0.5) {
    return false;
  }

  const words = message.split('a');
  // Subtract 1 to not count the last word
  for (let i = 0; i < words.length - 1; i++) {
    if (words[i].length == 10) {
        return true;
    }
  }
  return false;
}
