function containsDuplicate(nums: number[]): boolean {
  const set = new Set<number>();
  for (const num of nums) {
    if (set.has(num)) {
      return true;
    }
    set.add(num);
  }
  return false;
}

export {
  containsDuplicate
}

// case 1
let nums: number[] = [1,2,3,1];
let result: boolean = containsDuplicate(nums);
console.log(result);

// case 2
nums = [1,2,3,4];
result = containsDuplicate(nums);
console.log(result);

// case 3
nums = [1,1,1,3,3,4,3,2,4,2];
result = containsDuplicate(nums);
console.log(result);