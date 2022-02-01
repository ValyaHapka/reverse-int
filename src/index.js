module.exports = function reverse (n) {
  const nAbs = Math.abs(n);
  const nToArray = Array.from(String(nAbs), Number)
  const reverseArray = nToArray.reverse();
  return Number(reverseArray.join(''))
}
