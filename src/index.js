import readlineSync from 'readline-sync';

const startBrainGame = (instuction, generatedGameData) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?');
  console.log(`Hello, ${userName}!`);
  console.log(instuction);
  const finalRound = 3;
  const startNextRound = (iter) => {
    if (iter === finalRound) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const [question, correctAnswer] = generatedGameData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (correctAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. 
Let's try again, ${userName}!`);
      return;
    }
    console.log('Correct');
    startNextRound(iter + 1);
  };
  startNextRound(0);
};

export default startBrainGame;
