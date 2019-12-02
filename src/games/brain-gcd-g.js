#!/usr/bin/node
import {
  getRandomInt, question, error, equal,
} from '..';

// get rez
const rez = (num1, num2) => {
  let nod = 1;
  let low = num1;
  let n = 1;
  if (num1 > num2) {
    low = num2;
  }
  while (n <= low) {
    if (num1 % n === 0 && num2 % n === 0) {
      nod = n;
    }
    n += 1;
  }
  return nod;
};

const brainGdc = (name) => {
  let num1;
  let num2;
  let userAnsw;
  let n = 3;
  while (n) {
    num1 = getRandomInt(0, 100);
    num2 = getRandomInt(0, 100);
    userAnsw = question(`${num1} ${num2}`);

    if (equal(userAnsw, String(rez(num1, num2)))) {
      console.log('Correct!');
    } else {
      error(userAnsw, String(rez(num1, num2)), `${name}`);
      return 0;
    }
    n -= 1;
  }
  console.log(`Congratulations, ${name}!`);
  return (0);
};

export default brainGdc;
