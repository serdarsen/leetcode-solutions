function singleNumber(nums: number[]): number {
  let res = 0;
  for (const n of nums) {
    res = res ^ n;
  }
  return res;
}

export {
  singleNumber
}

// case 1
let nums: number[] = [2,2,1];
let result: number = singleNumber(nums);
console.log(result);

// case 2
nums = [4,1,2,1,2];
result = singleNumber(nums);
console.log(result);

// case 3
nums = [1];
result = singleNumber(nums);
console.log(result);