import readlineSync from 'readline-sync';

export const startBrainGame = (instuction, generatedGameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(instuction);
  const gameIterator = (iter) => {
    const finalRound = 3;
    if (iter === finalRound) {
      return console.log(`Congratulations, ${userName}!`);}
    const data = generatedGameData();
    const [ question, correctAnswer ] = data;
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer !== userAnswer) {
      return console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. 
Let's try again, ${userName}!`);}
    console.log('Correct');
    return gameIterator(iter + 1);
  };
  return gameIterator(0);
};
