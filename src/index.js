import { cons, car, cdr } from '@hexlet/pairs';
import readlineSync from 'readline-sync';

export const gameData = (question, answer) => cons(question, answer);
const getQuestion = (data) => car(data);
const getCorrectAnswer = (data) => cdr(data);

export const startBrainGame = (rules, updateGameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(rules);
  const gameIterator = (iter) => {
    if (iter === 3) return console.log(`Congratulations, ${userName}!`);
    const data = updateGameData();
    const question = getQuestion(data);
    const correctAnswer = getCorrectAnswer(data);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer !== userAnswer) return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. \nLet's try again, ${userName}!`);
    console.log('Correct');
    return gameIterator(iter + 1);
  };
  return gameIterator(0);
};

export const randomInteger = (min, max) => {
  const rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};
