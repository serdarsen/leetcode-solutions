/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let carry = 1;

  for (let i = digits.length - 1; i >= 0; i--) {
    if (carry === 0) {
      break;
    }

    if (digits[i] === 9) {
      digits[i] = 0;
    } else {
      digits[i] += 1;
      carry = 0;
    }
  }

  if (carry === 1) {
    digits.unshift(1);
  }

  return digits;
};

// case 1
let digits = [1, 2, 3];
let result = plusOne(digits);
console.log(result); // [1, 2, 4]

// case 2
digits = [4, 3, 2, 1];
result = plusOne(digits);
console.log(result); // [4, 3, 2, 2]

// case 3
digits = [9];
result = plusOne(digits);
console.log(result); // [1, 0]

// case 4
digits = [1, 9, 4];
result = plusOne(digits);
console.log(result); // [1, 9, 5]
