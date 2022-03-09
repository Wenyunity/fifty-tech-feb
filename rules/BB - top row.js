{
  module.exports = {
    check(string) { return rule(string); },
    ruleNumber: 30,
  };
}

// Rule 30: Do you have a majority of your letters in the top row?
function rule(message) {
  const newMessage = message.toUpperCase().replace(new RegExp('[^A-Z]', 'g'), '');
  const notTop = newMessage.replace(new RegExp('[QWERTYUIOP]', 'g'), '').length;
  const top = newMessage.replace(new RegExp('[^QWERTYUIOP]', 'g'), '').length;
  if (top > notTop) {
    return true;
  }
  return false;
}
