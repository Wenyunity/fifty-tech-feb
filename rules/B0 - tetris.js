{
  module.exports = {
    check(string) { return rule(string); },
    ruleNumber: 28,
  };
}

// Rule 28: Scrapping all letters except JOILSTZ, is the order a valid 7bag?
// Must have at least one full bag.
function rule(message) {
  const newMessage = message.toUpperCase().replace(new RegExp('[^JOILSTZ]', 'g'), '');
  if (newMessage.length < 7) {
    return false;
  }

  const letterString = 'JOILSTZ';
  const letterAll = [0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < newMessage.length; i++) {
    letterAll[letterString.indexOf(newMessage[i])] += 1;
    // After every 7 letters, check for bag.
    if ((i + 1) % 7 == 0) {
      if (Math.max(...letterAll) != Math.min(...letterAll)) {
      return false;
      }
    }
  }
  // Partial bag check.
  if (Math.max(...letterAll) - 1.5 > Math.min(...letterAll)) {
    return false;
  }
  return true;
}
