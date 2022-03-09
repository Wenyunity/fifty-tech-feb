{
  module.exports = {
    check(string) { return rule(string); },
    ruleNumber: 41,
  };
}

// Rule 41: Do you have three consecutive letters that satisfy the pythagorean theorem
// When a = 1 and z = 26; must be in the order AB = C
function rule(message) {
  const newMessage = message.toUpperCase().replace(new RegExp('[^A-Z]', 'g'), '');
  const stringValue = '0ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  if (newMessage.length < 3) {
    return false;
  }

  for (let i = 0; i < newMessage.length - 2; i++) {
    const x = stringValue.indexOf(newMessage[i]) ** 2;
    const y = stringValue.indexOf(newMessage[i + 1]) ** 2;
    const z = stringValue.indexOf(newMessage[i + 2]) ** 2;

    // Check for equality but do rounding in case of failure
    if (x + y - z > -0.1 && x + y - z < 0.1) {
      return true;
    }
  }

  return false;
}
