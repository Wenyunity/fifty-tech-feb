{
  module.exports = {
    check(string) { return rule(string); },
    ruleNumber: 31,
  };
}

// Rule 31: Do you have consecutive letters that sum up to 31 if A = 1 and Z = 26
function rule(message) {
  const newMessage = message.toUpperCase().replace(new RegExp('[^A-Z]', 'g'), '');
  let fill = 'G----------------------------------------------';
  const letterString = '0ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const fillString = 'G-------------------------------------------------------';
  for (let i = 0; i < newMessage.length; i++) {
    fill = fillString.substring(0, letterString.indexOf(newMessage[i])) + fill;
    if (fill[31] == 'G') {
      return true;
    }
    fill = fill.substring(0, 40);
  }
  return false;
}
