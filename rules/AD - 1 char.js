{
  module.exports = {
    check(string) { return rule(string); },
    ruleNumber: 5,
  };
}

// Rule 5: Do you have exactly one character in a "word"?
function rule(message) {

  const words = message.split(' ');
  for (let i = 0; i < words.length; i++) {
    if (words[i].length == 1) {
        return true;
    }
  }
  return false;
}
