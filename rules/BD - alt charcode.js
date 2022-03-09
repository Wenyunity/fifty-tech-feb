{
  module.exports = {
    check(string) { return rule(string); },
    ruleNumber: 32,
  };
}

// Rule 32: If you take alternating add and subtraction using charcodes, do you end with a positive number?
function rule(message) {
  let sum = 0;
  for (let i = 0; i < message.length; i++) {
    if (i % 2 == 0) {
      sum += message.charCodeAt(i);
    }
    else {
      sum -= message.charCodeAt(i);
    }
  }
  if (sum > 0) {
    return true;
  }
  return false;
}
