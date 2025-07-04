/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  digits.reverse();
  let carry = 1;
  let i = 0;

  while (carry) {
    if (i < digits.length) {
      if (digits[i] === 9) {
        digits[i] = 0;
      } else {
        digits[i] += 1;
        carry = 0;
      }
    } else {
      digits.push(1);
      carry = 0;
    }
    i++;
  }

  return digits.reverse();    
};

// case 1
let digits = [1, 2, 3];
let result = plusOne(digits);
console.log(result);

// case 2
digits = [4, 3, 2, 1];
result = plusOne(digits)
console.log(result);

// case 3
digits = [9];
result = plusOne(digits);
console.log(result);
