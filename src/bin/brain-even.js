#!/usr/bin/node
import readlineSync from 'readline-sync';
import sayHello from '..';

// Функция для получения рандомного числа от 0 до 100
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Greetings
const greetings = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if the number is even, otherwise answer "no".\n');
  return 0;
};

const brainEven = (name) => {
  let n = 3;
  let a = 0;
  let realAnsw = '';
  let actual = '';
  let answ = '';
  while (n) {
    a = getRandomInt(0, 100);
    console.log(`Question: ${a}`);
    actual = readlineSync.question('Your Answer: ');
    if (a % 2 === 0) answ = actual === 'yes' ? 1 : 0;
    else answ = actual === 'no' ? 1 : 0;
    if (answ) {
      console.log('Correct!');
    } else {
      realAnsw = (a % 2 === 0 ? 'yes' : 'no');
      console.log(`\n'${actual}' is wrong answer ;( Correct answer was '${realAnsw}'.`);
      console.log(`Let's try again, ${name}!`);
      return 0;
    }
    n -= 1;
  }
  console.log(`Congratulations ${name}!`);
  return 0;
};

greetings();
const name = sayHello();
console.log(`Hello, ${name}!\n`);
brainEven(name);
