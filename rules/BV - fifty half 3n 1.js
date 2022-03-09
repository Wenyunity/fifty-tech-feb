{
  module.exports = {
    check(string) { return rule(string); },
    ruleNumber: 50,
  };
}

// Rule 50: If you have exactly 50 pairs of characters with each pair occupying
// character slots (n, 50 + mod(3(n+1), 50)), then this rule FAILS. Otherwise, pass.
function rule(message) {
  if (message.length != 100) {
    return true;
  }

  // Loop through
  for (let i = 0; i < 50; i++) {
    const letter = message.charAt(i);
    if (message.indexOf(letter) != i || message.lastIndexOf(letter) != (50 + (3 * (i + 1)) % 50)) {
      return true;
    }
  }
  return false;
}
