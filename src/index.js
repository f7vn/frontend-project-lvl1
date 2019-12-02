import readlineSync from 'readline-sync';


// Функция приветствия
export const sayHello = () => {
  const actual = readlineSync.question('Your name is ... ');
  console.log(`Hello, ${actual}!\n`);
  return actual;
};

// greetings
export const greetings = (str) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${str}\n`);
  return 0;
};

// Функция для получения рандомного числа от 0 до 100
export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Задание вопроса и получения ответа-значения
export const question = (str) => {
  console.log(`Question: ${str}`);
  const answer = readlineSync.question('Your Answer: ');
  return answer;
};

// Функциия для вывода неверного ответа
export const error = (userAnsw, realAnsw, name) => {
  console.log(`'${userAnsw}' is wrong answer ;( Correct answer was '${realAnsw}'.`);
  console.log(`Let's try again, ${name}!`);
};

// Сравнение двух строк
export function equal(str1, str2) {
  return str1 === str2 ? 1 : 0;
}

// Возвращает является ли число простым
export const isPrime = (num) => {
  let n = 2;
  if (num === 0 || num === 1) {
    return 0;
  }
  while (n < num) {
    if (num % n === 0) {
      return 0;
    }
    n += 1;
  }
  return 1;
};

// Возвращает является ли число четным
export function isEven(num) {
  return num % 2 === 0 ? 'yes' : 'no';
}
