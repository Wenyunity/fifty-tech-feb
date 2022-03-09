{
  module.exports = {
    check(string) { return rule(string); },
    ruleNumber: 18,
  };
}

// Rule 18: Does your response have an equal amount of two vowels that is non-zero?
function rule(message) {

  const vowels = 'AEIOU';
  const vowelCount = [];
  const vowelOnly = message.toUpperCase().replace(new RegExp('[^AEIOU]', 'g'), '');

  if (vowelOnly.length == 0) {
    return false;
  }

  for (let i = 0; i < vowels.length; i++) {
    const numVowel = (vowelOnly.match(new RegExp(vowels[i], 'g')) || []).length;
    if (vowelCount.includes(numVowel)) {
      return true;
    }

    if (numVowel > 0) {
      vowelCount.push(numVowel);
    }
  }
  return false;
}
