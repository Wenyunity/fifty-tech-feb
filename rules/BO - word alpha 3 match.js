{
  module.exports = {
    check(string) { return rule(string); },
    ruleNumber: 43,
  };
}

// Rule 43: Sort your response's words in charcode order. Do at least three match?
function rule(message) {
  const newMessage = message.split(' ');
  const sortMessage = message.split(' ').sort();
  let inPlace = 0;

  if (newMessage.length < 3) {
    return false;
  }

  for (let i = 0; i < newMessage.length; i++) {
    if (newMessage[i] == sortMessage[i]) {
      inPlace++;
      if (inPlace > 2) {
        return true;
      }
    }
  }
  return false;
}
