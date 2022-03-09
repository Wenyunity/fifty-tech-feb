{
  module.exports = {
    check(string) { return rule(string); },
    ruleNumber: 20,
  };
}

// Rule 20: Do you have a character whose unicode value is greater than 200?
function rule(message) {

  const newMessage = message.replace(new RegExp('[A-Za-z ]', 'g'), '');
  for (let i = 0; i < newMessage.length; i++) {
    if (newMessage.charCodeAt(i) > 200) {
      return true;
    }
  }
  return false;
}
