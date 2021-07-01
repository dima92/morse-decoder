const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  let newArr = []
  for (let i = 0; i < expr.length / 10; i++) {
    let numbers = expr.slice(i * 10, i * 10 + 10)
    newArr[i] = ''
    for (let j = 0; j < 5; j++) {
      switch (numbers.slice(j * 2, j * 2 + 2)) {
        case "00" :
          break;
        case "**" :
          newArr[i] = ' ';
          break;
        case "10" :
          newArr[i] += '.';
          break;
        case "11":
          newArr[i] += '-';
      }
    }
    newArr[i] = MORSE_TABLE[newArr[i]] || ' '
  }
  return newArr.join('')
}

module.exports = {
  decode
}