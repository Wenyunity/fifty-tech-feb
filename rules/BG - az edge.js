{
  module.exports = {
    check(string) { return rule(string); },
    ruleNumber: 35,
  };
}

// Rule 35: using A-Z 1-26, do you have a 5+ letter word where the outside is worth more than the inside?
function rule(message) {
  let newMessage = message.toUpperCase().replace(new RegExp('[^A-Z ]', 'g'), '');
  newMessage = newMessage.split(' ').filter(len => len.length > 4);
  const stringValue = '0ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  for (let i = 0; i < newMessage.length; i++) {
    // Outside sum
    const sumOut = stringValue.indexOf(newMessage[i][0]) + stringValue.indexOf(newMessage[i][newMessage[i].length - 1]);
    // Inside sum
    let sumIn = 0;
    for (let j = 1; j < newMessage[i].length - 1; j++) {
      sumIn += stringValue.indexOf(newMessage[i][j]);
    }
    // Check sums
    if (sumOut > sumIn) {
      return true;
    }
  }
  return false;
}
