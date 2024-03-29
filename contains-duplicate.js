// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.



// Although different browsers or JavaScript engines may implement Set differently, it is always guaranteed to give us time complexity better than O(N).
const containsDuplicate = (array) => {
  return array.length !== new Set(array).size;
};

// time: o(n^2)
const containsDuplicatee = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        return true;
      }
    }
  }
  return false;
};

// time: o(n) space: o(n)
const containsDuplicateee = (nums) => {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]] !== undefined) {
      return true;
    }
    obj[nums[i]] = i;
  }
  return false;
};
