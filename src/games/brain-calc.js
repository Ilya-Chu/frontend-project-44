import { startBrainGame } from '../index.js';
import { getRandomInteger } from '../utils.js';

const instuction = 'What is the result of the expression?';
const getGameData= () => {
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomInteger(0, 2)];
  const randomNumber1 = getRandomInteger(1, 100);
  const randomNumber2 = getRandomInteger(1, 100);

  let question, answer;
  switch (operator) {
    case '+':
      question = `${randomNumber1} + ${randomNumber2}`;
      answer = randomNumber1 + randomNumber2;
      break;
    case '-':
      question = `${randomNumber1} - ${randomNumber2}`;
      answer = randomNumber1 - randomNumber2;
      break;
    case '*':
      question = `${randomNumber1} * ${randomNumber2}`;
      answer = randomNumber1 * randomNumber2;
      break;
    default:
      throw new Error(`Unexpected operator: ${operator}`);
  }

  return [question, String(answer)];
};
const runGameCalc = () => startBrainGame(instuction, getGameData);
export default runGameCalc;
