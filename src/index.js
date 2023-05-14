import readlineSync from 'readline-sync';

const startBrainGame = (instuction, generatedGameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log(instuction);
  const finalRound = 3;
  const gameIterator = (iter) => {
    if (iter === finalRound) {
      const congratulationsMessage = () => console.log(`Congratulations, ${userName}!`);
      return congratulationsMessage();
    }
    const [question, correctAnswer] = generatedGameData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer !== userAnswer) {
      const gameOverMessage = () => console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. 
Let's try again, ${userName}!`);
      return gameOverMessage();
    }
    console.log('Correct');
    return gameIterator(iter + 1);
  };
  return gameIterator(0);
};

export default startBrainGame;
