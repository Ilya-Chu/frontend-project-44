import startBrainGame from '../index.js';
import getRandomInteger from '../utils.js';

const instruction = 'What number is missing in the progression?';

const getProgression = (start, step, length, hiddenIndex) => {
  const progression = Array(length).fill(0).map((_, i) => start + (step * i));
  progression[hiddenIndex] = '..';
  return progression.join(' ');
};

const getGameData = () => {
  const starNum = getRandomInteger(1, 10);
  const randStep = getRandomInteger(1, 5);
  const randLength = getRandomInteger(5, 10);
  const randHiddenNum = getRandomInteger(2, randLength - 1);
  const question = getProgression(starNum, randStep, randLength, randHiddenNum);
  const answer = starNum + randStep * randHiddenNum;
  return [question, String(answer)];
};

const runGameProgression = () => startBrainGame(instruction, getGameData);

export default runGameProgression;
