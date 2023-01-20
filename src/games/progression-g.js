import { startBrainGame, gameData, randomInteger } from '../index.js';

const rules = 'What number is missing in the progression?';

const nFinder = (start, step, n) => start + (step * (n - 1));

const getProgression = (start, step, length, hiddenNum) => {
  let result = '';
  for (let i = 1; i <= length; i += 1) {
    if (i === hiddenNum) {
      result += ' ..';
    } else {
      result += ` ${nFinder(start, step, i)}`;
    }
  }
  return result;
};

const questionAnswer = () => {
  const starNum = randomInteger(1, 10);
  const randStep = randomInteger(1, 5);
  const randLength = randomInteger(5, 10);
  const randHiddenNum = randomInteger(1, randLength);
  const question = getProgression(starNum, randStep, randLength, randHiddenNum);
  const answer = nFinder(starNum, randStep, randHiddenNum);
  return gameData(question, String(answer));
};

const runGameProgression = () => startBrainGame(rules, questionAnswer);

export default runGameProgression;
