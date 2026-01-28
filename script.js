const questions = [
    {
        question: "what is 2+2 ?",
        answer: [
            { text: "4", correct: true },
            { text: "3", correct: false },
            { text: "2", correct: false },
            { text: "1", correct: false },
        ]
    },
 {
        question: "what is 3+3 ?",
        answer: [
            { text: "6", correct: true },
            { text: "3", correct: false },
            { text: "2", correct: false },
            { text: "1", correct: false },
        ]
    },
 {
        question: "what is 4+4 ?",
        answer: [
            { text: "8", correct: true },
            { text: "3", correct: false },
            { text: "2", correct: false },
            { text: "1", correct: false },
        ]
    },
     {
        question: "what is 5+5 ?",
        answer: [
            { text: "10", correct: true },
            { text: "3", correct: false },
            { text: "2", correct: false },
            { text: "1", correct: false },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const  nextButton = document.getElementById("next-btn");