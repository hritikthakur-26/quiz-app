const questions = [
    {
        question: "what is 2+2 ?",
        answers: [
            { text: "4", correct: true },
            { text: "3", correct: false },
            { text: "2", correct: false },
            { text: "1", correct: false },
        ]
    },
    {
        question: "what is 3+3 ?",
        answers: [
            { text: "6", correct: true },
            { text: "3", correct: false },
            { text: "2", correct: false },
            { text: "1", correct: false },
        ]
    },
    {
        question: "what is 4+4 ?",
        answers: [
            { text: "8", correct: true },
            { text: "3", correct: false },
            { text: "2", correct: false },
            { text: "1", correct: false },
        ]
    },
    {
        question: "what is 5+5 ?",
        answers: [
            { text: "10", correct: true },
            { text: "3", correct: false },
            { text: "2", correct: false },
            { text: "1", correct: false },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild("button");

    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

startQuiz();

