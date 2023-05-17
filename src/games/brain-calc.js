import startBrainGame from '../index.js';
import getRandomInteger from '../utils.js';

const instruction = 'What is the result of the expression?';

const doArithmetic = (num1, num2, operator = '+') => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unexpected operator: ${operator}`);
  }
};

const getGameData = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomInteger(0, 2)];
  const randomNumber1 = getRandomInteger(1, 100);
  const randomNumber2 = getRandomInteger(1, 100);

  const question = `${randomNumber1} ${operator} ${randomNumber2}`;
  const answer = doArithmetic(randomNumber1, randomNumber2, operator);

  return [question, String(answer)];
};
const runGameCalc = () => startBrainGame(instruction, getGameData);
export default runGameCalc;
