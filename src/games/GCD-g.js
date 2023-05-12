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

const rules = 'Find the greatest common divisor of given numbers.';

const questionAnswer = () => {
  const rNum1 = getRandomInteger(1, 100);
  const rNum2 = getRandomInteger(1, 10);
  const question = `${rNum1} ${rNum2}`;
  const answer = gcdFinder(rNum1, rNum2);
  return [question, String(answer)];
};

const runGameGCD = () => startBrainGame(rules, questionAnswer);

export default runGameGCD;
