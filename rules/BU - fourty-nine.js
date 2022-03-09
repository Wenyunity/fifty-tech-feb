{
  module.exports = {
    check(string) { return rule(string); },
    ruleNumber: 49,
  };
}

// Rule 49: Is the sum of the usages of ZXCVBNM a square?
function rule(message) {
  const newMessage = message.toUpperCase().replace(new RegExp('[^ZXCVBNM]', 'g'), '');
  if (newMessage.length < 2) {
    return true;
  }

  if (Math.floor(Math.sqrt(newMessage.length)) == Math.sqrt(newMessage.length)) {
    return true;
  }
  return false;
}
