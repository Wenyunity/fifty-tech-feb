{
  module.exports = {
    check(string) { return rule(string); },
    ruleNumber: 14,
  };
}

// Rule 14: Does your response have more than 14 characters that are not A-Za-z and spaces?
function rule(message) {

  if (message.replace(new RegExp('[^A-Za-z ]', 'g'), '').length > 14) {
    return true;
  }

  return false;
}
