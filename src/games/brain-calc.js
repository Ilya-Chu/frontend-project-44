import startBrainGame from '../index.js';
import getRandomInteger from '../utils.js';

const doArithmetic = (num1, num2, operator = '+') => {
  let arithmeticResult;
  switch (operator) {
    case '+':
      arithmeticResult = num1 + num2;
      break;
    case '-':
      arithmeticResult = num1 - num2;
      break;
    case '*':
      arithmeticResult = num1 * num2;
      break;
    default:
      throw new Error(`Unexpected operator: ${operator}`);
  } 
  return arithmeticResult;
}

const instuction = 'What is the result of the expression?';
const getGameData = () => {
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomInteger(0, 2)];
  const randomNumber1 = getRandomInteger(1, 100);
  const randomNumber2 = getRandomInteger(1, 100);

  const question = `${randomNumber1} ${operator} ${randomNumber2}`;
  const answer = doArithmetic(randomNumber1, randomNumber2, operator);

  return [question, String(answer)];
};
const runGameCalc = () => startBrainGame(instuction, getGameData);
export default runGameCalc;
