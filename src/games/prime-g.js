import { startBrainGame, gameData, randomInteger } from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const questionAnswer = () => {
  const question = randomInteger(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return gameData(question, answer);
};

const runGamePrime = () => startBrainGame(rules, questionAnswer);

export default runGamePrime;
