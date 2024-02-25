const myArray = [1, 2, 3, 4, 5, 6, 7]; //expected: [5,6,7,1,2,3,4] for k=3

// bad time complexity! n^step ?
const rotateArray = (array, step) => {
  for (let i = 0; i < step; i++) {
    array.unshift(array.pop());
  }
  return array;
};

// time: o(n) space: o(n) also we need to modify original array!
const rotate = (array, step) => {
  var temp = [];
  for (i = 0; i < array.length; i++) {
    if (i + step < array.length) {
      temp[i + step] = array[i];
    } else temp[i - (step + 1)] = array[i];
  }
  return temp;
};

// modify original array, time: o(n), space:o(n)
const rotateArr = (array, step) => {
  const copyArray = array.slice();
  for (let i = 0; i < array.length; i++) {
    array[(i + step) % array.length] = copyArray[i];
  }
  return array;
};

const rotateWithReverse = (array, step) => {
  step %= array.length;
  const reverse = (arr, start, end) => {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  };
  reverse(array, 0, array.length - 1);
  reverse(array, 0, step - 1);
  reverse(array, step, array.length - 1);
  return array;
};


console.log(rotateArray(myArray, 3));
console.log(rotate(myArray, 3));
console.log(rotateArr(myArray, 3));
