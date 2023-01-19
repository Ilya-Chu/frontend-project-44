import { startBrainGame, gameData, randomInteger } from '../index.js';

const gcdFinder = (num1, num2) => {
  let gcd = 1;
  for (let i = 2; i <= num2 / 2; i += 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      gcd = i;
    }
  } return gcd;
};

const rules = 'Find the greatest common divisor of given numbers.';

const questionAnswer = () => {
  const rNum1 = randomInteger(1, 100);
  const rNum2 = randomInteger(1, 10);
  const question = `${rNum1} ${rNum2}`;
  const answer = gcdFinder(rNum1, rNum2);
  return gameData(question, String(answer));
};

const runGameGCD = () => startBrainGame(rules, questionAnswer);

export default runGameGCD;
