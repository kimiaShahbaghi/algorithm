//Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

const strStr = (haystack, needle) => {
  if (haystack === needle) return 0;
  if (needle.length === 0) return 0;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      for (let j = 0; ; j++) {
          if (j === needle.length) return i;
          if (haystack[i + j] !== needle[j]) break;
      }
    }
  }
  return -1;
};

console.log(strStr("sadbutsad", "sad"));
