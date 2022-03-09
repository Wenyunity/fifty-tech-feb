{
  module.exports = {
    check(string) { return rule(string); },
    ruleNumber: 37,
  };
}

// Rule 37: Do you have four consecutive words that are sequentially later?
function rule(message) {
  const newMessage = message.toUpperCase().replace(new RegExp('[^A-Z ]', 'g'), '').split(' ');
  let inRow = 0;

  // Sum through
  for (let i = 0; i < newMessage.length - 1; i++) {
    const locale = newMessage[i].localeCompare(newMessage[i + 1]);
    // If later, add one to counter; if earlier, reset to 0.
    if (locale > 0) {
      inRow += 1;
      if (inRow == 3) {
        return true;
      }
    }
    else {
      inRow = 0;
    }
  }

  return false;
}
