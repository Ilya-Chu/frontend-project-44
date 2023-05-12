import { startBrainGame } from '../index.js';
import { getRandomInteger } from '../utils.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const questionAnswer = () => {
  const question = getRandomInteger(1, 100);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return [question, answer];
};

const runGameEven = () => startBrainGame(rules, questionAnswer);

export default runGameEven;
