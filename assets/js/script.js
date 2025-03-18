// THIS IS FOR SYSTEM SETTING THEME MODE
//======================================
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

if (prefersDarkScheme.matches) {
    document.body.classList.add("dark-theme");
} else {
    document.body.classList.remove("dark-theme");
}
//=====================================



// THIS IS THE QUIZ CODE
//=======================
const quizQuestions = [
    {
        question: "你喜欢吃韩国菜？",
        options: ["What time is it?", "Do you like Korean food?", "Where is the library?", "What time should we go to the supermarket?"],
        correctAnswer: "Do you like Korean food?"
    },
    {
        question: "明天下午他们会做飞机去美国，对不对？",
        options: ["Tomorrow afternoon they will fly to the USA, right?", "This afternoon he will take a taxi to the train station.", "She and I will go to the cafe tomorrow morning", "Where is her new bed?"],
        correctAnswer: "Tomorrow afternoon they will fly to the USA, right?"
    },
    {
        question: "我也有一节新中文课。",
        options: ["I have math class.", "I also have a new Chinese class.", "I will go to the park.", "Do you like Chinese food or Korean food?"],
        correctAnswer: "I also have a new Chinese class."
    },
    {
        question: "你喜欢茶还是咖啡？",
        options: ["Do you like coke or pepsi?", "Do you want to talk a walk?", "Do you like tea or coffee?", "Where is the supermarket?"],
        correctAnswer: "Do you like tea or coffee?"
    },
    {
        question: "明天我们去图书馆吧！",
        options: ["Let's go to the library tomorrow!", "I will go to the park.", "Where is the supermarket?", "Do you like Chinese food or Korean food?"],
        correctAnswer: "Let's go to the library tomorrow!"
    },
    {
        question: "我女儿的床很漂亮。",
        options: ["My dad's couch is very comfortable.", "My daughter's bed is very beautiful.", "I have a new car.", "Where is the library?"],
        correctAnswer: "My daughter's bed is very beautiful."
    }
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 60;
let timerInterval;

function startQuiz() {
    document.getElementById('start-button').style.display = 'none';
    document.getElementById('grid-container').style.display = 'none';
    displayQuestion();
    startTimer();
}

function displayQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const questionText = document.getElementById("question-text");
    const answerButtons = document.getElementById("answer-buttons");

    questionText.innerHTML = "";
    answerButtons.innerHTML = "";

    questionText.innerHTML = currentQuestion.question;

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("answer-buttons");
        answerButtons.appendChild(button);

        button.addEventListener("click", function () {
            checkAnswer(option);
        });
    });
}

function checkAnswer(selectedOption) {
    const currentQuestion = quizQuestions[currentQuestionIndex];

    if (selectedOption === currentQuestion.correctAnswer) {
        score++;
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
        displayQuestion();
    } else {
        endQuiz();
    }
}

function startTimer() {
    timerInterval = setInterval(function () {
        timeLeft--;

        document.getElementById("timer").textContent = timeLeft;

        if (timeLeft <= 0) {
            endQuiz();
        }
    }, 1000);
}

function endQuiz() {
    clearInterval(timerInterval);

    const scorePercentage = Math.round((score / quizQuestions.length) * 100);

    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = `
        <h2>Quiz beendet!</h2>
        <p>Dein Ergebnis: ${score} von ${quizQuestions.length}</p>
        <p>Score Percentage: ${scorePercentage}%</p>
    `;
}

document.getElementById('start-button').addEventListener('click', startQuiz);
//=========================================================