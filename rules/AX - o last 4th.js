{
  module.exports = {
    check(string) { return rule(string); },
    ruleNumber: 25,
  };
}

// Rule 25: Is there a letter o in the final quarter of the response?
// (Must have 4 characters or more in response, round down)
function rule(message) {

  if (message.length < 4) {
    return false;
  }

  const newMessage = message.toUpperCase();
  if (newMessage.lastIndexOf('O') > newMessage.length * 3.0 / 4.0) {
    return true;
  }
  return false;
}
