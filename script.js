const quizContainer = document.getElementById('quiz-container');
const questionContainer = document.getElementById('question-container');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.querySelector('.next-button');

let currentQuestionIndex = 0;

const questions = [
    {
        question: 'What is the capital of France?',
        answers: [
            { text: 'Paris', correct: true },
            { text: 'Berlin', correct: false },
            { text: 'Madrid', correct: false },
            { text: 'Rome', correct: false }
        ]
    },
    {
        question: 'Which planet is known as the Red Planet?',
        answers: [
            { text: 'Earth', correct: false },
            { text: 'Mars', correct: true },
            { text: 'Jupiter', correct: false },
            { text: 'Saturn', correct: false }
        ]
    }
    // Add more questions as needed
];

function startQuiz() {
    currentQuestionIndex = 0;
    nextButton.classList.add('hide');
    showQuestion(questions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionContainer.innerText = question.question;
    answerButtons.innerHTML = '';
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.addEventListener('click', () => selectAnswer(answer));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(answer) {
    const correct = answer.correct;
    if (correct) {
        // Handle correct answer
    } else {
        // Handle wrong answer
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion(questions[currentQuestionIndex]);
    } else {
        // Quiz ends
        quizContainer.innerHTML = '<h2>Quiz Complete</h2>';
    }
}

function nextQuestion() {
    nextButton.classList.add('hide');
    showQuestion(questions[currentQuestionIndex]);
}

startQuiz();
