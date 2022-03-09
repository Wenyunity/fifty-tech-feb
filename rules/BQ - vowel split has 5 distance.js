{
  module.exports = {
    check(string) { return rule(string); },
    ruleNumber: 45,
  };
}

// Rule 45: Check the distances between vowels. If all 0-5 are present, win.
function rule(message) {
  const thereString = message.split(/[aeiou]/gi);
  if (thereString.length < 6) {
    return false;
  }

  const array = [0, 0, 0, 0, 0, 0];
  // Check every set of characters for how long they are
  for (let i = 1; i < thereString.length - 1; i++) {
    if (thereString[i].length < 6) {
      // Add it to array
      array[thereString[i].length] += 1;
      // All lengths found
      if (Math.min(...array) > 0) {
        return true;
      }
    }
  }
  return false;
}
