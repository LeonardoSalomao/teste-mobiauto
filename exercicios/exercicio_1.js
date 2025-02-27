function maskify(string) {
  if (string.length <= 4) {
    return string;
  }
  const maskedPart = '#'.repeat(string.length - 4);
  const lastFour = string.slice(-4);
  return maskedPart + lastFour;
}

module.exports = maskify;

if (require.main === module) {
  console.log(maskify("4556364607935616"));
  console.log(maskify("64607935616"));
  console.log(maskify("1"));
  console.log(maskify(""));
  console.log(maskify("Skippy"));
}
