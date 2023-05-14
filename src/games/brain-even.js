import startBrainGame from '../index.js';
import getRandomInteger from '../utils.js';

const instruction = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);
const getGameData = () => {
  const question = getRandomInteger(1, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const runGameEven = () => startBrainGame(instruction, getGameData);

export default runGameEven;
