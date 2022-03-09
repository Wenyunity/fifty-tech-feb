{
  module.exports = {
    check(string) { return rule(string); },
    ruleNumber: 16,
  };
}

// Rule 16: Is the length of your longest word *shorter* than the number of words?
function rule(message) {

  const words = message.split(' ');

  // Find maximum of the array
  const x = words.map(len => len.length);
  const max = x.reduce(function(a, b) {
    return Math.max(a, b);
}, -Infinity);

  // Compare
  if (words.length > max) {
    return true;
  }

  return false;
}
