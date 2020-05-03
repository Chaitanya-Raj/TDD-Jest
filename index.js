function capitalize(x) {
  let arr = x.split("");
  arr[0] = arr[0].toUpperCase();
  return arr.join("");
}

function reverseString(x) {
  let arr = x.split("");
  arr.reverse();
  return arr.join("");
}

let calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  divide: function (a, b) {
    return a / b;
  },
  multiply: function (a, b) {
    return a * b;
  },
};

function analyze(arr) {
  return {
    average: arr.reduce((sum, cur) => sum + cur) / arr.length,
    max: Math.max(...arr),
    min: Math.min(...arr),
    length: arr.length,
  };
}

function cipher(str, key) {
  let numbers = [];
  let newSentece = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[a-zA-Z]/)) {
      numbers.push(str[i].charCodeAt(0));
    } else {
      numbers.push(str[i]);
    }
  }

  for (let i = 0; i < numbers.length; i++) {
    if (str[i].match(/[a-zA-Z]/) && numbers[i] >= 65 && numbers[i] <= 90) {
      newSentece.push(String.fromCharCode(((numbers[i] - 65 + key) % 26) + 65));
    } else if (
      str[i].match(/[a-zA-Z]/) &&
      numbers[i] >= 97 &&
      numbers[i] <= 122
    ) {
      newSentece.push(String.fromCharCode(((numbers[i] - 97 + key) % 26) + 97));
    } else {
      newSentece.push(numbers[i]);
    }
  }
  return newSentece.join("");
}

module.exports = {
  capitalize,
  reverseString,
  calculator,
  analyze,
  cipher,
};
