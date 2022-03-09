{
  module.exports = {
    check(string) { return rule(string); },
    ruleNumber: 36,
  };
}

// Rule 36: Do you have four consecutive words that are sequentially earlier?
function rule(message) {
  const newMessage = message.toUpperCase().replace(new RegExp('[^A-Z ]', 'g'), '').split(' ');
  let inRow = 0;

  // Sum through
  for (let i = 0; i < newMessage.length - 1; i++) {
    const locale = newMessage[i].localeCompare(newMessage[i + 1]);
    // If earlier, add one to counter; if later, reset to 0.
    if (locale < 0) {
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
