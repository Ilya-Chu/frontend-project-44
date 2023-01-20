import { startBrainGame, gameData, randomInteger } from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const questionAnswer = () => {
  const question = randomInteger(1, 100);
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return gameData(question, answer);
};

const runGameEven = () => startBrainGame(rules, questionAnswer);

export default runGameEven;
