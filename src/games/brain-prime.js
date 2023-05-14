import startBrainGame from '../index.js';
import getRandomInteger from '../utils.js';

const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const getGameData = () => {
  const question = getRandomInteger(1, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, String(answer)];
};

const runGamePrime = () => startBrainGame(instruction, getGameData);

export default runGamePrime;
