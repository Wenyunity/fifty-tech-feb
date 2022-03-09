{
  module.exports = {
    check(string) { return rule(string); },
    ruleNumber: 27,
  };
}

// Rule 27: Is the string "weny" in your response, if you allow any letters in-between?
function rule(message) {
  const newMessage = message.toLowerCase();
  if (newMessage.search(new RegExp('w.*e.*n.*y', 'g')) > -1) {
    return true;
  }
  return false;
}
