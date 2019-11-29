import readlineSync from 'readline-sync';

const sayHello = () => {
  const actual = readlineSync.question('Your name is ...');
  console.log(`Hello, ${actual}`);
  return 0;
};

export default sayHello;
