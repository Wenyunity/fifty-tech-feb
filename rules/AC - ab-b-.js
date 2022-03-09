{
  module.exports = {
    check(string) { return rule(string); },
    ruleNumber: 4,
  };
}

// Rule 4: Does the second character in the message appear again later?
function rule(message) {

  // Error out for 1 character
  if (message.length == 1) {
    return false;
  }

  if (message.lastIndexOf(message.charAt(1)) == 1) {
    return false;
  }
  else {
    return true;
  }
}
