{
  module.exports = {
    check(string) { return rule(string); },
    ruleNumber: 44,
  };
}

// Rule 44: Check every fourth letter. If there is a match, fail.
function rule(message) {
  let thereString = '';
  if (message.length < 8) {
    return true;
  }

  // Check every fourth character for a match
  for (let i = 3; i < message.length; i += 4) {
    // Is there a match
    if (thereString.indexOf(message[i]) > -0.5) {
      return false;
    }
    // Add it to characters seen
    thereString += message[i];
  }
  return true;
}
