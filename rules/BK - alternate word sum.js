{
  module.exports = {
    check(string) { return rule(string); },
    ruleNumber: 39,
  };
}

// Rule 39: If you take alternating add and subtraction using word lengths, do you end with a positive number?
function rule(message) {
  const newMessage = message.split(' ');
  let sum = 0;
  for (let i = 0; i < newMessage.length; i++) {
    if (i % 2 == 0) {
      sum += newMessage[i].length;
    }
    else {
      sum -= newMessage[i].length;
    }
  }
  if (sum > 0) {
    return true;
  }
  return false;
}
