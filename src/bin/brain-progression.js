#!/usr/bin/node
import {
  sayHello, getRandomInt, question, error, equal,
} from '..';

// Greetings
const greetings = () => {
  console.log('Welcome to the Brain Games!');
  console.log('What number is missing in the progression?\n');
  return 0;
};

// get rez
const rez = (num1, num2, missing) => {
  let n = 0;
  let rezult;
  let answr = '';
  const arr = [];
  while (n < 10) {
    rezult = num1 + n * num2;
    arr.push(`${rezult}`);
    n += 1;
  }
  arr[missing] = '..';
  n = 0;
  while (arr[n]) {
    answr += `${arr[n]} `;
    n += 1;
  }
  return answr;
};

const brainCalc = (name) => {
  let num1;
  let num2;
  let userAnsw;
  let realAnsw;
  let n = 3;
  let missing;
  while (n) {
    num1 = getRandomInt(0, 100);
    num2 = getRandomInt(0, 100);
    missing = getRandomInt(0, 9);
    userAnsw = question(`${rez(num1, num2, missing)}`);
    realAnsw = num1 + missing * num2;

    if (equal(userAnsw, String(realAnsw))) {
      console.log('Correct!');
    } else {
      error(userAnsw, String(realAnsw), `${name}`);
      return 0;
    }
    n -= 1;
  }
  console.log(`Congratulations, ${name}!`);
  return (0);
};

greetings();
brainCalc(sayHello());
