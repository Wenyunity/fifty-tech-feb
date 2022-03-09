{
  module.exports = {
    check(string) { return rule(string); },
    ruleNumber: 21,
  };
}

// Rule 21: Does the concatenation of numbers in your response end up greater than the sum of all charCodes of those numbers?
function rule(message) {

  const numMessage = message.replace(new RegExp('[^0123456789]', 'g'), '');
  if (numMessage.length == 0) {
    return false;
  }
  let charSum = 0;
  for (let i = 0; i < numMessage.length; i++) {
    charSum += numMessage.charCodeAt(i);
  }

  if (charSum < Number(numMessage)) {
    return true;
  }
  return false;
}
