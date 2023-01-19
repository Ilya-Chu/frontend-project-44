#!/usr/bin/env node

import { cons, car, cdr } from '@hexlet/pairs';
import readlineSync from 'readline-sync';

export const gameData = (question, answer) => cons(question, answer);
const getQuestion = (data) => car(data);
const getCorrectAnswer = (data) => cdr(data);

export const startBrainGame = (rules, updateGameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};
