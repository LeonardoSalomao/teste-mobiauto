function checkIfTheFirstLetterIsUppercase(word) {
    if (!word) return false;
    return /^[A-Z]/.test(word);
  }

  module.exports = checkIfTheFirstLetterIsUppercase;

if (require.main === module) {
    console.log(checkIfTheFirstLetterIsUppercase("Brasil"));
    console.log(checkIfTheFirstLetterIsUppercase("mobiauto"));
    console.log(checkIfTheFirstLetterIsUppercase("xXx xXx"));
    console.log(checkIfTheFirstLetterIsUppercase("xDD"));
    console.log(checkIfTheFirstLetterIsUppercase("Deu Certo!"));
  }
  