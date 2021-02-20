const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = '';
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = ['1) Who was the first American Woman in Space?', '2) True of false: 5000 meters = 5 kilometers.', '3) (5+3)/2 * 10 = ', "4) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?", '5) What is the minimum crew size for the ISS?'];
let correctAnswer = ['Sally Ride', 'True', '40', 'Trajectory', '3'];
let candidateAnswer = [];
let questions = 5;
let correctAnswers = 0;
let candidateAnswers;


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question('Please enter your name: ');
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  for (let i = 0; i < question.length; i++) {
    candidateAnswer[i] = input.question(question[i]);
    console.log(`Your Answer: ${candidateAnswer[i]}`);
    console.log(`Correct Answer: ${correctAnswer[i]}`);
    console.log('\n');
  }
}

function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  let grade = 0;
    for (let e = 0; e < correctAnswer.length; e++) {
      if (candidateAnswer[e].toLowerCase() === correctAnswer[e].toLowerCase()) {
        grade++;
        correctAnswers++;;
      }
    }
  let gradePercentage = (correctAnswers) / (questions) * 100;
  let passOrFail;
    if (gradePercentage >= 80) {
      passOrFail = 'PASSED';
    } else {
      passOrFail = 'FAILED';
    }
  candidateAnswers = candidateAnswer.length;
  console.log(`>>> Overall Grade: ${gradePercentage}% (${correctAnswers} of ${candidateAnswers}) <<<`);
  console.log(`>>> Status: ${passOrFail} <<<`);
  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log(`Candidate Name: ${candidateName}`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};