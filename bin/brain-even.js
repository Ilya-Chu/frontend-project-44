#!/usr/bin/env node

import readlineSync from 'readline-sync';
import userName from '../src/cli.js';

const getRandom100 = () => Math.floor(Math.random() * 100);

console.log('Welcome to the Brain Games!');
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const brainEven = () => {
  for (let i = 0; i < 3; i += 1) {
    const askNumber = getRandom100();
    const gameoverResponce = () => console.log(`Let's try again, ${userName}`);
    console.log(`Question: ${askNumber}`);
    const userAnswer = readlineSync.question('Your answer:');
    if (askNumber % 2 === 0) {
      if (userAnswer === 'yes') {
        console.log('Correct!');
      } else {
        console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "yes".`);
        return gameoverResponce();
      }
    } else if (userAnswer === 'no') {
      console.log('Correct!');
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "no".`);
      return gameoverResponce();
    }
  }
  return console.log(`Congratulations, ${userName}`);
};

brainEven();
