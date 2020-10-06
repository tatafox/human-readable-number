module.exports = function toReadable (number) {

  const dictonaryNumbers = {
    0: '',
    1: 'one',
    2 : 'two',
    3 : 'three',
    4 : 'four',
    5 : 'five',
    6 : 'six',
    7 : 'seven',
    8 : 'eight',
    9 : 'nine',
    10 : 'ten',
    11 : 'eleven',
    12 : 'twelve',
    13 : 'thirteen',
    14 : 'fourteen',
    15 : 'fifteen',
    16 : 'sixteen',
    17 : 'seventeen',
    18 : 'eighteen',
    19 : 'nineteen'
  }

  const dictonaryNumbersTens = {
    2 : 'twenty',
    3 : 'thirty',
    4 : 'forty',
    5 : 'fifty',
    6 : 'sixty',
    7 : 'seventy',
    8 : 'eighty',
    9 : 'ninety'
  }

  let result = '';
  let tens;

  if (number === 0) {
    return 'zero';  
  } 

  if (number < 20) {
    return dictonaryNumbers[number];  
  } 
  
  if (number >= 100) {
    result += dictonaryNumbers[Math.trunc(number / 100)] + ' hundred ';
    tens = number % 100;
  } else {
    tens = number;
  }

  if (tens < 20) {
    result += dictonaryNumbers[tens];  
  } else {
    result += dictonaryNumbersTens[Math.trunc(tens / 10)] + ' ' + dictonaryNumbers[Math.trunc(tens % 10)]
  }

  return result.trim();
 

}
