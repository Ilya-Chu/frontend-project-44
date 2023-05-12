import { startBrainGame, gameData, randomInteger } from '../index.js';

const rules = 'What is the result of the expression?';
const questionAnswer = () => {
  const operator = randomInteger(1, 3);
  const rNum1 = randomInteger(1, 100);
  const rNum2 = randomInteger(1, 100);
  if (operator === 1) {
    const question = `${rNum1}  +${rNum2}`;
    const answer = rNum1 + rNum2;
    return gameData(question, String(answer));
  } if (operator === 2) {
    const question = `${rNum1} - ${rNum2}`;
    const answer = rNum1 - rNum2;
    return gameData(question, String(answer));
  } if (operator === 3) {
    const question = `${rNum1} * ${rNum2}`;
    const answer = rNum1 * rNum2;
    return gameData(question, String(answer));
  } return false;
};
const runGameCalc = () => startBrainGame(rules, questionAnswer);
export default runGameCalc;
