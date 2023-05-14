import startBrainGame from '../index.js';
import getRandomInteger from '../utils.js';

const isEven = (number) => (number % 2 === 0);

const instuction = 'Answer "yes" if the number is even, otherwise answer "no".';
const getGameData = () => {
  const question = getRandomInteger(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const runGameEven = () => startBrainGame(instuction, getGameData);

export default runGameEven;
