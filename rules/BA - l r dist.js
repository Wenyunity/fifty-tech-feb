{
  module.exports = {
    check(string) { return rule(string); },
    ruleNumber: 29,
  };
}

// Rule 29: Is there an L in a position as far away from the left as an R on the right?
function rule(message) {
  const newMessage = message.toUpperCase();

  // Don't check if no L/R
  if (newMessage.indexOf('L') < -0.5 || newMessage.indexOf('R') < -0.5) {
    return false;
  }

  for (let i = 0; i < newMessage.length; i++) {
    if (newMessage.charAt(i) == 'L' && newMessage.charAt(newMessage.length - i - 1) == 'R') {
      return true;
    }
  }
  return false;
}
