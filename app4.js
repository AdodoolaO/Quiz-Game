let apiUrl = "https://opentdb.com/api.php?amount=50";

let questions = [];
let questionIndex = 0;
let correctAnswer = "";
//let userAnswer = "";

axios.get(apiUrl).then(showQuestion);

//created a function to (1) recieve API information (2) Include info in HTml (3) Make answer options random

function showQuestion(response) {
  let questions = response.data.results;
  console.log(questions);
  console.log(questions[questionIndex]);

  console.log(questions[questionIndex].question);
  let questionPart = document.querySelector("#question");
  questionPart.innerHTML = questions[questionIndex].question;
  let categoryPart = document.querySelector("#category");
  categoryPart.innerHTML = questions[questionIndex].category;

  let correctAnswer = questions[questionIndex].correct_answer;
  let answers = questions[questionIndex].incorrect_answers;
  console.log(answers);
  answers.push(correctAnswer); // adds element/s to the end of the array. In this case the correct answer is added to the incorrecy answer array
  console.log(answers);

  let shuffledAnswers = shuffleAnswers(answers);
  console.log(shuffledAnswers);

  let answerOne = document.querySelector("#firstAnswer");
  answerOne.innerHTML = shuffledAnswers[0];
  let answerTwo = document.querySelector("#secondAnswer");
  answerTwo.innerHTML = shuffledAnswers[1];
  let answerThree = document.querySelector("#thirdAnswer");
  answerThree.innerHTML = shuffledAnswers[2];
  let answerFour = document.querySelector("#fourthAnswer");
  answerFour.innerHTML = shuffledAnswers[3];
}
function checkAnswer() {
  alert(correctAnswer);
}

let showAnswer = document.querySelector("#answerButton");
showAnswer.addEventListener("click", checkAnswer);

function nextQuestion() {
  axios.get(apiUrl).then(showQuestion);
}

let nextButton = document.querySelector("#next");
nextButton.addEventListener("click", nextQuestion);

function shuffleAnswers(answersArray) {
  let answersInRandomOrder = [];
  for (let i = 0; (l = answersArray.length); i < l, i++) {
    console.log(i);
    console.log(l);

    let randomIndex = Math.floor(Math.random() * answersArray.length);
    let item = answersArray.splice(randomIndex, 1);
    //The splice() method changes the contents of an array by removing or replacing existing elements

    console.log(item);
    answersInRandomOrder = answersInRandomOrder.concat(item);
    //The concat() method is used to merge two or more arrays.
    //This method does not change the existing arrays, but instead returns a new array.
  }
  return answersInRandomOrder;
}
