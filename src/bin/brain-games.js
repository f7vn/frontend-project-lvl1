#!/usr/bin/node
import sayHello from '..';

console.log('Welcome to the Brain Games');
const name = sayHello();
console.log(`Hello, ${name}!`);
