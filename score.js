function playerRanks(ranks, scores) {
  const uniqueRanks = [...new Set(ranks)];
  let result = []; // space complexity: o(n) 
  for (let score of scores) {
    if (score >= uniqueRanks[0]) {
      result.push(1);
    } else if (score < uniqueRanks[uniqueRanks.length - 1]) {
      result.push(ranks.length + 1);
    } else {
      for (let i = 1; i < uniqueRanks.length; i++) { // time complexity: o(n^2)
        if (uniqueRanks[i - 1] > score && score >= uniqueRanks[i]) { 
          result.push(i + 1);
          break;
        }
      }
    }
  }
  return result;
}

const result = playerRanks(
  [100, 90, 90, 80, 75, 60, 30, 10],
  [120, 50, 65, 77, 90]
);

console.log({ result });
