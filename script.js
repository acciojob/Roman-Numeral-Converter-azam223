function convertToRoman(num) {
  const romanSymbols = {
    1000: 'M',
    900: 'CM',
    500: 'D',
    400: 'CD',
    100: 'C',
    90: 'XC',
    50: 'L',
    40: 'XL',
    10: 'X',
    9: 'IX',
    5: 'V',
    4: 'IV',
    1: 'I',
  };

  let result = '';

  for (let value in romanSymbols) {
    while (num >= value) {
      result += romanSymbols[value];
      num -= value;
    }
  }

  return result;
}

// You can test your code with examples like this:
console.log(convertToRoman(14)); // Output: XIV
console.log(convertToRoman(798)); // Output: DCCXCVIII
