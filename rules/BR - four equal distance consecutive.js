{
  module.exports = {
    check(string) { return rule(string); },
    ruleNumber: 46,
  };
}

// Rule 46: If, for four consecutive letters, the difference in charcode is constant, return true.
function rule(message) {
  if (message.length < 4) {
    return false;
  }

  // Initialize values
  let consecutive = 1;
  let difference = message.charCodeAt(0) - message.charCodeAt(1);

  // Loop through
  for (let i = 1; i < message.length - 1; i++) {
    const locale = message.charCodeAt(i) - message.charCodeAt(i + 1);

    if (locale == difference) {
      consecutive++;
      if (consecutive > 3) {
        return true;
      }
    }
    // Reset counter to 1, look for new difference.
    else {
      consecutive = 1;
      difference = locale;
    }
  }
}
