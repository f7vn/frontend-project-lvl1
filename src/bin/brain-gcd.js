#!/usr/bin/node
import {
  sayHello, getRandomInt, question, error, equal,
} from '..';

// Greetings
const greetings = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Find the greatest common divisor of given numbers.\n');
  return 0;
};

// get rez
const rez = (num1, num2) => {
  let nod = 1;
  let n = 1;
  while (n !== num1) {
    if (num1 % n === 0 && num2 % n === 0) {
      nod = n;
    }
    n += 1;
  }
  return nod;
};

const brainCalc = (name) => {
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

greetings();
brainCalc(sayHello());
