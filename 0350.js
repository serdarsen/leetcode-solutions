/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  let p1 = 0;
  let p2 = 0;
  const result = [];

  while (p1 < nums1.length && p2 < nums2.length) {
    if (nums1[p1] === nums2[p2]) {
      result.push(nums1[p1]);
      p1++;
      p2++;
    } else if (nums1[p1] < nums2[p2]) {
      p1++;
    } else {
      p2++;
    }
  }

  return result;
};

export {
  intersect
}

// case 1
let nums1 = [1,2,2,1];
let nums2 = [2,2];
let result = intersect(nums1, nums2);
console.log(result);

// case 2
nums1 = [4,9,5];
nums2 = [9,4,9,8,4];
result = intersect(nums1, nums2);
console.log(result);