function romanToInteger(romanNumeral) {
    const romanNumerals = {
      "I": 1,
      "V": 5,
      "X": 10,
      "L": 50,
      "C": 100,
      "D": 500,
      "M": 1000,
    };
  
    let total = 0;
    for (let i = 0; i < romanNumeral.length; i++) {
      const currentRoman = romanNumerals[romanNumeral.charAt(i)];
      const nextRoman = romanNumerals[romanNumeral.charAt(i + 1)] || 0;
  
      if (currentRoman < nextRoman) {
        total -= currentRoman;
      } else {
        total += currentRoman;
      }
    }
  
    return total;
  }

  const romanNumeral = "I";
const integerValue = romanToInteger(romanNumeral);

console.log(integerValue);