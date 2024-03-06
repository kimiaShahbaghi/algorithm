const reverse = (x) => {
  let digits = 0;
  let isNegative = false;
  if (x < 0) {
    x *= -1;
    isNegative = true;
  }
  while (x > 0) {
    digits = digits * 10 + (x % 10);
    x = Math.floor(x / 10);
  }
  const result = isNegative ? +digits * -1 : +digits;
  if (result > 2 ** 31 - 1 || result < (-2) ** 31) {
    return 0;
  }
  return result;
};
