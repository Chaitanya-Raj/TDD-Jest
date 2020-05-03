function cipher(encodedText, key) {
  let numbers = [];
  let decodedText = [];

  for (let i = 0; i < encodedText.length; i++) {
    if (encodedText[i].match(/[a-zA-Z]/)) {
      numbers.push(encodedText[i].charCodeAt(0));
    } else {
      numbers.push(encodedText[i]);
    }
  }

  for (let i = 0; i < numbers.length; i++) {
    if (
      encodedText[i].match(/[a-zA-Z]/) &&
      numbers[i] >= 65 &&
      numbers[i] <= 90
    ) {
      decodedText.push(
        String.fromCharCode(((numbers[i] - 65 + key) % 26) + 65)
      );
    } else if (
      encodedText[i].match(/[a-zA-Z]/) &&
      numbers[i] >= 97 &&
      numbers[i] <= 122
    ) {
      decodedText.push(
        String.fromCharCode(((numbers[i] - 97 + key) % 26) + 97)
      );
    } else {
      decodedText.push(numbers[i]);
    }
  }
  return decodedText.join("");
}

export default cipher;
