import readlineSync from 'readline-sync';

const sayHello = () => {
  const actual = readlineSync.question('Your name is ... ');
  return actual;
};

export default sayHello;
