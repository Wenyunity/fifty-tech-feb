{
  module.exports = {
    check(string) { return rule(string); },
    ruleNumber: 8,
  };
}

// Rule 8: Do you have three words with greater than 7 characters?
function rule(message) {

  const words = message.toUpperCase().split(' ').filter(len => len.length > 7);
  if (words.length > 2) {
    return true;
  }
  return false;
}
