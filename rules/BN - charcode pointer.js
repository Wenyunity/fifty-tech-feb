{
  module.exports = {
    check(string) { return rule(string); },
    ruleNumber: 42,
  };
}

// Rule 42: Take each charCode and use it as the index.
// Start at the first character. Does it infinitely loop?
function rule(message) {
  // Setup for the rule
  const visitList = [];
  let position = 0;
  let limit = 0;

  // Iterate through the rule until a loop or overflow termination.
  while (limit < message.length + 10) {

    // If we've been here, then a loop has been made
    if (visitList[position]) {
      return true;
    }

    // Get charcode at position
    const moveN = message.charCodeAt(position);

    // Not a correct character, game over
    if (moveN >= message.length) {
      return false;
    }

    // Mark that we have been here
    visitList[position] = true;

    // Move to a new position
    position = moveN;
    limit = limit + 1;
  }

  // It shouldn't reach this position
  return false;
}
