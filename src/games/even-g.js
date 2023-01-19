import { startBrainGame, gameData } from '../index.js';

const getRandom100 = () => Math.floor(Math.random() * 100);
const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const questionAnswer = () => {
  const question = getRandom100();
  const answer = question % 2 === 0 ? 'yes' : 'no';
  return gameData(question, answer);
};

const runGameEven = () => startBrainGame(rules, questionAnswer);

export default runGameEven;
