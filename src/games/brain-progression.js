import { startBrainGame } from '../index.js';
import { getRandomInteger } from '../utils.js';

const instuction = 'What number is missing in the progression?';

const getHiddenNumber = (start, step, n) => start + (step * (n - 1));

const getProgression = (start, step, length, hiddenNum) => {
  let result = String(start);
  for (let i = 2; i <= length; i += 1) {
    if (i === hiddenNum) {
      result += ' ..';
    } else {
      result += ` ${getHiddenNumber(start, step, i)}`;
    }
  }
  return result;
};

const getGameData = () => {
  const starNum = getRandomInteger(1, 10);
  const randStep = getRandomInteger(1, 5);
  const randLength = getRandomInteger(5, 10);
  const randHiddenNum = getRandomInteger(2, randLength);
  const question = getProgression(starNum, randStep, randLength, randHiddenNum);
  const answer = getHiddenNumber(starNum, randStep, randHiddenNum);
  return [question, String(answer)];
};

const runGameProgression = () => startBrainGame(instuction, getGameData);

export default runGameProgression;
