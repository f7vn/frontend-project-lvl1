#!/usr/bin/node
import {
  sayHello, greetings,
} from '..';

import brainPrime from '../games/brain-prime-g';

greetings('Answer "yes" if given number is prime. Otherwise answer "no".');
brainPrime(sayHello());
