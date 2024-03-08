const validPalindrom = (s) => {
  let letters = "";
  for (let i = 0; i < s.length; i++) {
    let charCode = s.charCodeAt(i);
    if (charCode > 64 && charCode < 91) {
      charCode += 32;
    }
    if (
      (charCode >= 97 && charCode < 123) ||
      (charCode >= 48 && charCode < 58)
    ) {
      letters += String.fromCharCode(charCode);
    }
  }
  if (letters.length === 1) return true;
  for (let j = 0; j < Math.floor(letters.length / 2); j++) {
    if (letters[j] !== letters[letters.length - 1 - j]) {
      return false;
    }
  }
  return true;
};
