const validAnagram = (s, t) => {
  let firstWord = {};
  let secondWord = {};
  if (s.length !== t.length) return false;
  for (let i = 0; i < s.length; i++) {
    firstWord[s[i]] ? firstWord[s[i]]++ : (firstWord[s[i]] = 1);
  }
  for (let i = 0; i < t.length; i++) {
    secondWord[t[i]] ? secondWord[t[i]]++ : (secondWord[t[i]] = 1);
  }
  if (Object.keys(firstWord).length !== Object.keys(secondWord).length)
    return false;
  for (let key of Object.keys(firstWord)) {
    if (firstWord[key] !== secondWord[key]) return false;
  }
  return true;
};

console.log(validAnagram("anagram", "nagaram"));
