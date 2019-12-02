#!/usr/bin/node
import {
  sayHello, greetings,
} from '..';
import brainEven from '../games/brain-even-g';

greetings('Answer "yes" if the number is even, otherwise answer "no".');
brainEven(sayHello());
