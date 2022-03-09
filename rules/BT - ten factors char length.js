{
  module.exports = {
    check(string) { return rule(string); },
    ruleNumber: 48,
  };
}

// Rule 48: Does your response's length have at least 10 factors?
function rule(message) {
  // 48 is the lowest number that has 10 factors.
  if (message.length < 48) {
    return false;
  }

  // Might as well save time by setting it to true.
  if (message.length == 48) {
    return true;
  }

  let count = 0;
  // Each factor below sqrt(x) is paired with one above it.
  // If sqrt(x) is an integer it will only count for 1, but we are looking
  // For 10 or more, and the +1 will not change it, so we can ignore it.
  // Note that this will go up to but not including sqrt(x).
  for (let i = 1; i < Math.sqrt(message.length); i++) {
    if (message.length % i == 0) {
      count++;
      if (count > 4) {
        return true;
      }
    }
  }
  return false;
}
