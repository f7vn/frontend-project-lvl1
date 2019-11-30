import readlineSync from 'readline-sync';


//
export const sayHello = () => {
  const actual = readlineSync.question('Your name is ... ');
  console.log(`Hello, ${actual}!\n`);
  return actual;
};

// Функция для получения рандомного числа от 0 до 100
export function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Задание вопроса и получения ответа
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
