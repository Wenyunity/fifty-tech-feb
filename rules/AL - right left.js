{
  module.exports = {
    check(string) { return rule(string); },
    ruleNumber: 13,
  };
}

// Rule 13: Does your response have a solo left parentheses or a left parentheses before a right parentheses?
function rule(message) {

  if (message.indexOf('(') < -0.5) {
    return false;
  }

  if (message.lastIndexOf('(') > message.indexOf(')')) {
    return true;
  }

  return false;
}
