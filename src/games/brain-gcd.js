import { startBrainGame } from '../index.js';
import { getRandomInteger } from '../utils.js';

const gcdFinder = (num1, num2) => {
  let gcd = 1;
  for (let i = 2; i <= num2; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcd = i;
    }
  } return gcd;
};

const instuction = 'Find the greatest common divisor of given numbers.';

const getGameData = () => {
  const randomNumber1 = getRandomInteger(1, 100);
  const randomNumber2 = getRandomInteger(1, 10);
  const question = `${randomNumber1} ${randomNumber2}`;
  const answer = gcdFinder(randomNumber1, randomNumber2);
  return [question, String(answer)];
};

const runGameGCD = () => startBrainGame(instuction, getGameData);

export default runGameGCD;
