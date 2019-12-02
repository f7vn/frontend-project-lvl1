#!/usr/bin/node
import {
  getRandomInt, question, error, equal,
} from '..';

// get rez
const rez = (num1, sign, num2) => {
  if (sign === '+') {
    return (num1 + num2);
  } if (sign === '-') {
    return (num1 - num2);
  } return (num1 * num2);
};

// get random sign
const getSign = () => {
  const num = getRandomInt(0, 2);
  if (num === 0) {
    return '+';
  } if (num === 1) {
    return '-';
  } if (num === 2) {
    return '*';
  } return 0;
};

const brainCalc = (name) => {
  let sign;
  let num1;
  let num2;
  let userAnsw;
  let n = 3;
  while (n) {
    num1 = getRandomInt(0, 100);
    num2 = getRandomInt(0, 100);
    sign = getSign();
    userAnsw = question(`${num1} ${sign} ${num2}`);

    if (equal(userAnsw, String(rez(num1, sign, num2)))) {
      console.log('Correct!');
    } else {
      error(userAnsw, String(rez(num1, sign, num2)), `${name}`);
      return 0;
    }
    n -= 1;
  }
  console.log(`Congratulations, ${name}!`);
  return (0);
};

export default brainCalc;
