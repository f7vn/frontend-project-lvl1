import {
  getRandomInt, question, error, equal, isPrime,
} from '..';

const brainPrime = (name) => {
  let num1;
  let userAnsw;
  let realAnsw;
  let n = 3;
  while (n) {
    num1 = getRandomInt(0, 100);
    userAnsw = question(`${num1}`);
    realAnsw = isPrime(num1) ? 'yes' : 'no';

    if (equal(userAnsw, realAnsw)) {
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

export default brainPrime;
