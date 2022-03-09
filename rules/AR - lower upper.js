{
  module.exports = {
    check(string) { return rule(string); },
    ruleNumber: 19,
  };
}

// Rule 19: Does your response satisfy the following inequality: 10 * Uppercase < Lowercase?
function rule(message) {

  if (message.replace(new RegExp('[^A-Z]', 'g'), '').length * 10 <
            message.replace(new RegExp('[^a-z]', 'g'), '').length) {
    return true;
  }

  return false;
}
