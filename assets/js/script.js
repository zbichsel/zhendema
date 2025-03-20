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
// THIS IS THE QUIZ CODE
//=======================
const quizQuestionsOne = [
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

let currentQuestionIndexOne = 0;
let scoreOne = 0;
let timeLeftOne = 60;
let timerIntervalOne;

function startQuizOne() {
    document.getElementById('start-button').style.display = 'none';
    document.getElementById('new-start-button').style.display = 'none';
    document.getElementById('grid-container').style.display = 'none';
    displayQuestionOne();
    startTimerOne();
}

function displayQuestionOne() {
    const currentQuestion = quizQuestionsOne[currentQuestionIndexOne];
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
            checkAnswerOne(option);
        });
    });
}

function checkAnswerOne(selectedOption) {
    const currentQuestion = quizQuestionsOne[currentQuestionIndexOne];

    if (selectedOption === currentQuestion.correctAnswer) {
        scoreOne++;
    }

    currentQuestionIndexOne++;

    if (currentQuestionIndexOne < quizQuestionsOne.length) {
        displayQuestionOne();
    } else {
        endQuizOne();
    }
}

function startTimerOne() {
    timerIntervalOne = setInterval(function () {
        timeLeftOne--;

        document.getElementById("timer").textContent = timeLeftOne;

        if (timeLeftOne <= 0) {
            endQuizOne();
        }
    }, 1000);
}

function endQuizOne() {
    clearInterval(timerIntervalOne);

    const scorePercentage = Math.round((scoreOne / quizQuestionsOne.length) * 100);

    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = `
        <h2>Quiz beendet!</h2>
        <p>Dein Ergebnis: ${scoreOne} von ${quizQuestionsOne.length}</p>
        <p>Score Percentage: ${scorePercentage}%</p>
    `;
}

document.getElementById('start-button').addEventListener('click', startQuizOne);
//=========================================================

//=========================================================
// THIS IS THE SECOND QUIZ CODE
// WORK IN PROGRESS
const quizQuestionsTwo = [
    {
        question: "你喜欢吃韩国菜？",
        correctAnswer: "Do you like to eat Korean food?"
    },
    {
        question: "明天下午他们会做飞机去美国，对不对？",
        correctAnswer: "Tomorrow afternoon they will fly to the USA, right?"
    },
    {
        question: "我也有一节新中文课。",
        correctAnswer: "I also have a new Chinese class."
    },
    {
        question: "你喜欢茶还是咖啡？",
        correctAnswer: "Do you like tea or coffee?"
    },
    {
        question: "明天我们去图书馆吧！",
        correctAnswer: "Let's go to the library tomorrow!"
    },
    {
        question: "我女儿的床很漂亮。",
        correctAnswer: "My daughter's bed is very beautiful."
    }
];

let newQuestionIndexTwo = 0;
let newScoreTwo = 0;
let newTimeLeftTwo = 60;
let newTimerIntervalTwo;

function startNewQuizTwo() {
    document.getElementById('start-button').style.display = 'none';
    document.getElementById('new-start-button').style.display = 'none';
    document.getElementById('grid-container').style.display = 'none';
    startNewTimerTwo();

    displayQuestionsTwo();
}

function displayQuestionsTwo() {
    const currentQuestion = quizQuestionsTwo[newQuestionIndexTwo];
    const questionText = document.getElementById("test-question-text");
    const inputContainer = document.getElementById("input-container");

    document.getElementById('checkButton').style.display = 'block';

    questionText.innerHTML = "";
    inputContainer.innerHTML = "";

    questionText.innerHTML = currentQuestion.question;

    const inputAnswer = document.createElement("input");
    inputAnswer.type = "text";
    inputAnswer.id = "userAnswer";
    inputAnswer.classList.add("input-answer");
    inputAnswer.placeholder = "Type your answer here...";

    inputContainer.appendChild(inputAnswer);

    document.getElementById("result").textContent = "";

    const checkButton = document.getElementById("checkButton");
    checkButton.onclick = function () {
        checkAnswerTwo(inputAnswer.value);
    };
}

function checkAnswerTwo(userInput) {
    const currentQuestion = quizQuestionsTwo[newQuestionIndexTwo];
    const correctAnswer = currentQuestion.correctAnswer;

    if (userInput.trim().toLowerCase() === correctAnswer.toLowerCase()) {
        document.getElementById("result").textContent = "Correct!";
        document.getElementById("result").style.color = "white";
        newScoreTwo++;
    } else {
        document.getElementById("result").textContent = "Incorrect, try again!";
        document.getElementById("result").style.color = "red";
    }

    document.getElementById("userAnswer").value = '';

    setTimeout(function () {
        newQuestionIndexTwo++;
        if (newQuestionIndexTwo < quizQuestionsTwo.length) {
            displayQuestionsTwo();
        } else {
            document.getElementById("result").textContent = "Quiz Finished!";
            document.getElementById("test-question-text").innerHTML = '';
            endQuizTwo();
        }
    }, 1000);
}

function startNewTimerTwo() {
    newTimerIntervalTwo = setInterval(function () {
        newTimeLeftTwo--;

        document.getElementById("timer").textContent = newTimeLeftTwo;

        if (newTimeLeftTwo <= 0) {
            endQuizTwo();
        }
    }, 1000);
}

function endQuizTwo() {
    clearInterval(newTimerIntervalTwo);

    const scorePercentage = Math.round((newScoreTwo / quizQuestionsTwo.length) * 100);

    const questionContainer = document.querySelector(".newContainer");
    questionContainer.innerHTML = `
        <h2>Quiz beendet!</h2>
        <p>Dein Ergebnis: ${newScoreTwo} von ${quizQuestionsTwo.length}</p>
        <p>Score Percentage: ${scorePercentage}%</p>
    `;
}

document.getElementById('new-start-button').addEventListener('click', startNewQuizTwo);
