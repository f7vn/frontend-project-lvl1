import {
  getRandomInt, question, isEven, error,
} from '..';

const brainEven = (name) => {
  let n = 3;
  let a;
  let realAnsw;
  let actual;
  while (n) {
    a = getRandomInt(0, 100);
    actual = question(`${a}`);
    realAnsw = isEven(a);
    if (actual === realAnsw) {
      console.log('Correct!');
    } else {
      error(actual, realAnsw, name);
      return 0;
    }
    n -= 1;
  }
  console.log(`Congratulations ${name}!`);
  return 0;
};

export default brainEven;
