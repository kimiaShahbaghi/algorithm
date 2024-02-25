// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// time complexity: o(n)
const getSingleNumber = (array) => {
  const duplicates = array.filter(
    (item, index) => array.indexOf(item) !== index
  );
  for (let i = 0; i < array.length; i++) {
    if (duplicates.indexOf(array[i]) === -1) {
      return array[i];
    }
  }
};

