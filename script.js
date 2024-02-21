const highScoreButton = document.getElementById("highScoreButton");
const startButton = document.getElementById("startButton");
const quizContainer = document.getElementById("quizContainer");
const questionContainer = document.getElementById("questionContainer");
const question = document.getElementById("question");
const answerContainer = document.getElementById("answerContainer");
const choiceButton = document.querySelectorAll(".choice");
const currentScore = document.getElementById("currentScore");
const currentTime = document.getElementById("currentTime");

const questions = [
    {
        number: 0,
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "HotMail Manufacturing Language", "How To Make Lines", "Hypertext Manufacturing Language"],
        correctAnswer: "Hyper Text Markup Language"
    },
    {
        number: 1,
        question: "What does CSS stand for?",
        options: ["Code Style Sheet", "Cascading Style Sheet", "C", "D"],
        correctAnswer: "Cascading Style Sheet"
    },
    {
        number: 2,
        question: "What does a boolean data type refer to?",
        options: ["If/Then Statements", "Conjunction Statements", "True/False Statements", "Non Statements"],
        correctAnswer: "True/False Statements"
    },
    {
        number: 3,
        question: "How would you write a variable and name it in JavaScript",
        options: ["variable: name", "var name =", "var=name", "variableName"],
        correctAnswer: "var name ="
    },
    {
        number: 4,
        question: "What value separates JavaScript statements?",
        options: [",", ".", ";", ">"],
        correctAnswer: ";"
    },
    {
        number: 5,
        question: "When creating a for loop, which of these are NOT included?",
        options: ["Initializer", "Then", "Condition", "Final-Expression"],
        correctAnswer: "Then"
    },
    {
        number: 6,
        question: "What does API stand for?",
        options: ["Another Programming Invention", "Application Predictive Inference", "Array Positive Interface", "Application Programming Interface"],
        correctAnswer: "Application Programming Interface"
    },
    {
        number: 7,
        question: "Which of these are NOT one of the three main Front-End programming languages?",
        options: ["SQL", "HTML", "CSS", "JavaScript"],
        correctAnswer: "SQL"
    },
    {
        number: 8,
        question: "What is an algorithm?",
        options: ["A debugging tool designed for JavaScript", "The backing beat to an EDM song", "A collection of programs that are linked together", "A set of instructions or rules designed to solve a problem"],
        correctAnswer: "A set of instructions or rules designed to solve a problem"
    },
    {
        number: 9,
        question: "What is an array?",
        options: ["A server-side device that communicates to webpages", "Lists or groups of similar types of data values that are grouped", "A map in Black Ops", "A set of instructions or rules designed to solve a problem"],
        correctAnswer: "Lists or groups of similar types of data values that are grouped"
    },
];

startButton.addEventListener("click", begin);

function begin() {
    gameStart.style.display = "none";
    score=0;
    showQuestion();
    startTimer();
}

function showQuestion() { 
    for (let i = 0; i < questions.length; i++) {
    const currentQuestion = questions[i];
    question.textContent = currentQuestion.question;

    for (let b = 0; b < options.length; b++) {
        choiceButton[b].textContent = currentQuestion.options[b];
          }
    }}


//sets game timer
function startTimer() {
    timer = setInterval(function() {
        timerCount--;
        timerElement.textContent = timerCount;

        if (timerCount === 0) {
        clearInterval(timer);
        endQuiz();
        }
    }, 1000);
}

//ends game when time is up
function endGame() {
    if (timeLeft >= 0 || questions.length) {
    clearInterval(timerInterval);
    currentScore.textContent = "Your score is " + score + "! Thanks for playing!";
}
}