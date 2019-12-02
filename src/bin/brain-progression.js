#!/usr/bin/node
import {
  sayHello, greetings,
} from '..';

import brainProgression from '../games/brain-progression-g';

greetings('What number is missing in the progression?');
brainProgression(sayHello());
