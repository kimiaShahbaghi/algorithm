// "loveleetcode" --> 2

const firstUniqChar = (s) => {
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
      return s.indexOf(s[i]);
    }
  }
  return -1;
};

const firstUniqCharacter = (s) => {
  let results = {};
  for (let i = 0; i < s.length; i++) {
    results[s[i]] ? results[s[i]]++ : (results[s[i]] = 1);
  }
  for (let key of Object.keys(results)) {
    if (results[key] === 1) {
      return s.indexOf(key);
    }
  }
  return -1;
};
