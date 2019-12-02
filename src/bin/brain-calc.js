#!/usr/bin/node
import {
  sayHello, greetings,
} from '..';
import brainCalc from '../games/brain-calc-g';

greetings('What is the result of the expression?');
brainCalc(sayHello());
