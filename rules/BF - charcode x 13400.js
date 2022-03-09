{
  module.exports = {
    check(string) { return rule(string); },
    ruleNumber: 34,
  };
}

// Rule 34: If you have lowercase x, do the two characters on either side have a charCode multiplier of over 13400?
// BUG: If x is the first character, it will use x and char(2) as the two charcodes. Will not fix for this.
function rule(message) {
  if (message.indexOf('x') < -0.5) {
    return false;
  }
  let i = 0;
  const regex = /.{1}x.{1}/g;
  // Find .x. patterns
  while (i < message.length - 2) {
    const nextIndex = message.substring(i, message.length).match(regex);
    // No more x's
    if (nextIndex < -0.5) {
      return false;
    }

    // Multiply check
    if (message.charCodeAt(i + nextIndex) * message.charCodeAt (i + nextIndex + 2) > 13400) {
      return true;
    }

    // Move to next x
    i = nextIndex + i + 1;
  }
  return false;
}
