//You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits.

const plusOne = (array) => {
  array[array.length - 1] = ++array[array.length - 1];
  for (let i = array.length - 1; i > -1; i--) {
    if (array[i] === 10) {
      array[i] = 0;
      if (isNaN(array[i - 1])) {
        array.unshift(1);
        return array;
      }
      array[i - 1] = ++array[i - 1];
    } else break;
  }
  return array;
};
