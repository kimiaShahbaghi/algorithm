// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// [0,1,0,3,12] -> [1,3,12,0, 0]


const moveZeros = (nums) => {
  let zeroPointer = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let temp = nums[zeroPointer];
      nums[zeroPointer] = nums[i];
      nums[i] = temp;
      zeroPointer++;
    }
  }
  return nums;
};
