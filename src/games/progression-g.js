import { startBrainGame } from '../index.js';
import { getRandomInteger } from '../utils.js';

const rules = 'What number is missing in the progression?';

const nFinder = (start, step, n) => start + (step * (n - 1));

const getProgression = (start, step, length, hiddenNum) => {
  let result = String(start);
  for (let i = 2; i <= length; i += 1) {
    if (i === hiddenNum) {
      result += ' ..';
    } else {
      result += ` ${nFinder(start, step, i)}`;
    }
  }
  return result;
};

const questionAnswer = () => {
  const starNum = getRandomInteger(1, 10);
  const randStep = getRandomInteger(1, 5);
  const randLength = getRandomInteger(5, 10);
  const randHiddenNum = getRandomInteger(2, randLength);
  const question = getProgression(starNum, randStep, randLength, randHiddenNum);
  const answer = nFinder(starNum, randStep, randHiddenNum);
  return [question, String(answer)];
};

const runGameProgression = () => startBrainGame(rules, questionAnswer);

export default runGameProgression;
