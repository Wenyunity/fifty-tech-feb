{
  module.exports = {
    check(string) { return rule(string); },
    ruleNumber: 12,
  };
}

// Rule 12: Does your response contain at least one word such that it contains the unicode of its length + 96? (1 long = a)
function rule(message) {

  const words = message.split(' ');
  for (let i = 0; i < words.length; i++) {
    if (words[i].indexOf(String.fromCharCode(96 + words[i].length)) > -0.5) {
        return true;
    }
  }
  return false;
}
