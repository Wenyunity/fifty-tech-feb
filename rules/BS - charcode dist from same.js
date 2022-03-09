{
  module.exports = {
    check(string) { return rule(string); },
    ruleNumber: 47,
  };
}

// Rule 47: Do you have two of the same character that are their charcode apart?
function rule(message) {
  // Loop through
  for (let i = 0; i < message.length; i++) {
    const place = i + message.charCodeAt(i);
    if (place < message.length) {
      if (message.charAt(place) == message.charAt(i)) {
        return true;
      }
    }
  }
  return false;
}
