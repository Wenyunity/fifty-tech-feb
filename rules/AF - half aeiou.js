{
  module.exports = {
    check(string) { return rule(string); },
    ruleNumber: 7,
  };
}

// Rule 7: Do you have a word with greater than 50% of its characters being vowels?
function rule(message) {

  const words = message.toUpperCase().split(' ');
  for (let i = 0; i < words.length; i++) {
    if (words[i].length < words[i].replace(new RegExp('[^AEIOU]', 'g'), '').length * 2) {
        return true;
    }
  }
  return false;
}
