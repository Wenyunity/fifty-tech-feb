{
  module.exports = {
    check(string) { return rule(string); },
    ruleNumber: 23,
  };
}

// Rule 23: Does B appear before C in your response?
function rule(message) {

  const newMessage = message.toUpperCase();
  if (newMessage.indexOf('B') < newMessage.indexOf('C') && newMessage.indexOf('B') > -0.5) {
    return true;
  }
  return false;
}
