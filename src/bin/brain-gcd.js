#!/usr/bin/node
import {
  sayHello, greetings,
} from '..';

import brainGdc from '../games/brain-gcd-g';

greetings('Find the greatest common divisor of given numbers.');
brainGdc(sayHello());
