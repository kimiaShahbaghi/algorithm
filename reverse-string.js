const reverseString = (n) => {
  for (let i = 0; i < Math.floor(n.length / 2); i++) {
    [n[i], n[n.length - 1 - i]] = [n[n.length - 1 - i], n[i]];
  }
  return n;
};
