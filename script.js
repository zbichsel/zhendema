const container = document.querySelector('.container');

const hero = document.getElementsByClassName('grid-container');
const zhendema = document.querySelector('h1');
const h2El = document.querySelector('h2');


//FIXING THEME SWITCHER
//======================
function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
    if (localStorageTheme !== null) {
        return localStorageTheme;
    }

    if (systemSettingDark.matches) {
        return "dark";
    }

    return "light";
}

function updateThemeOnHtmlEl({ theme }) {
    document.querySelector("html").setAttribute("data-theme", theme);
}

const button = document.querySelector("[data-theme-toggle]");
if (button) {
    // Initial theme setting
    let currentThemeSetting = calculateSettingAsThemeString({
        localStorageTheme: localStorage.getItem("theme"),
        systemSettingDark: window.matchMedia("(prefers-color-scheme: dark)")
    });

    button.addEventListener("click", (event) => {
        const localStorageTheme = localStorage.getItem("theme");
        const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

        // Get the updated theme
        let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });

        const newTheme = currentThemeSetting === "dark" ? "light" : "dark";
        localStorage.setItem("theme", newTheme);
        updateThemeOnHtmlEl({ theme: newTheme });
    });
}

// Listen to changes in system color preference
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => {
    const localStorageTheme = localStorage.getItem("theme");
    const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

    let currentThemeSetting = calculateSettingAsThemeString({ localStorageTheme, systemSettingDark });
    updateThemeOnHtmlEl({ theme: currentThemeSetting });
});
//======================

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
    }
];

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 10;
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