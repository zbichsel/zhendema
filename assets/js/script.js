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
const quizQuestionsOne = [
    {
        question: "你喜欢吃韩国菜？",
        options: ["What time is it?", "Do you like to eat Korean food?", "Where is the library?", "What time should we go to the supermarket?"],
        correctAnswer: "Do you like to eat Korean food?"
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

function createQuizStructure() {
    const quizContainer = document.createElement('div');
    quizContainer.classList.add('quiz-container');

    const questionContainer = document.createElement('div');
    questionContainer.id = 'question-container';

    const questionText = document.createElement('p');
    questionText.id = 'question-text';

    const answerButtons = document.createElement('div');
    answerButtons.id = 'answer-buttons';

    questionContainer.appendChild(questionText);
    questionContainer.appendChild(answerButtons);

    const controlsContainer = document.createElement('div');
    controlsContainer.id = 'controls-container';

    const timerContainer = document.createElement('div');
    timerContainer.id = 'timer-container';
    timerContainer.hidden = false;

    const timerText = document.createElement('span');
    timerText.id = 'timer-text';
    // timerText.textContent = 'Time Left: ';

    const timer = document.createElement('span');
    timer.id = 'timer';
    timer.textContent = '60';

    timerText.appendChild(timer);
    timerContainer.appendChild(timerText);

    controlsContainer.appendChild(timerContainer);

    quizContainer.appendChild(questionContainer);
    quizContainer.appendChild(controlsContainer);

    document.body.appendChild(quizContainer);
}

function startQuizOne() {
    document.getElementById('start-button').style.display = 'none';
    document.getElementById('new-start-button').style.display = 'none';
    createQuizStructure();
    displayQuestionOne();
    startTimerOne();
}

function startTimerOne() {
    timerIntervalOne = setInterval(function () {
        timeLeftOne--;
        document.getElementById('timer').textContent = timeLeftOne;

        if (timeLeftOne <= 0) {
            clearInterval(timerIntervalOne);
            endQuizOne();
        }
    }, 1000);
}

function displayQuestionOne() {
    const currentQuestion = quizQuestionsOne[currentQuestionIndexOne];
    const questionText = document.getElementById("question-text");
    const answerButtons = document.getElementById("answer-buttons");

    questionText.innerHTML = currentQuestion.question;
    answerButtons.innerHTML = "";

    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("answer-buttons");
        answerButtons.appendChild(button);

        button.addEventListener("click", function () {
            checkAnswerOne(option, button);
        });
    });
}

function checkAnswerOne(selectedOption, buttonElement) {
    const currentQuestion = quizQuestionsOne[currentQuestionIndexOne];

    if (selectedOption === currentQuestion.correctAnswer) {
        scoreOne++;
        buttonElement.style.border = "2px solid green"; // Highlight correct answer
    } else {
        buttonElement.style.border = "2px solid red"; // Highlight incorrect answer
    }

    currentQuestionIndexOne++;

    if (currentQuestionIndexOne < quizQuestionsOne.length) {
        setTimeout(displayQuestionOne, 1000);  // Delay before showing the next question
    } else {
        endQuizOne();
    }
}

function endQuizOne() {
    clearInterval(timerIntervalOne);

    const scorePercentage = Math.round((scoreOne / quizQuestionsOne.length) * 100);

    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = `
        <h2>Quiz Finished!</h2>
        <p>Your score: ${scoreOne} out of ${quizQuestionsOne.length}</p>
        <p>Score Percentage: ${scorePercentage}%</p>
    `;
}

document.getElementById('start-button').addEventListener('click', startQuizOne);

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
let newTimerIntervalTwo;

function startNewQuizTwo() {
    document.getElementById('start-button').style.display = 'none';
    document.getElementById('new-start-button').style.display = 'none';

    // Create the quiz container dynamically
    createQuizContainer();

    // Start displaying the first question
    displayQuestionsTwo();
}

function createQuizContainer() {
    // Create the newContainer div
    const newContainer = document.createElement('div');
    newContainer.classList.add('newContainer');
    
    // Create and append the test-question-text paragraph
    const questionText = document.createElement('p');
    questionText.id = 'test-question-text';
    newContainer.appendChild(questionText);
    
    // Create and append the input-container div
    const inputContainer = document.createElement('div');
    inputContainer.id = 'input-container';
    newContainer.appendChild(inputContainer);
    
    // Create and append the checkButton button (initially hidden)
    const checkButton = document.createElement('button');
    checkButton.id = 'checkButton';
    checkButton.style.display = 'none'; // Hide initially
    checkButton.textContent = 'Submit';
    newContainer.appendChild(checkButton);
    
    // Create and append the result paragraph
    const result = document.createElement('p');
    result.id = 'result';
    newContainer.appendChild(result);

    // Append the newContainer to the body or any other parent element in your page
    document.body.appendChild(newContainer);
}

function displayQuestionsTwo() {
    const currentQuestion = quizQuestionsTwo[newQuestionIndexTwo];
    const questionText = document.getElementById("test-question-text");
    const inputContainer = document.getElementById("input-container");

    document.getElementById('checkButton').style.display = 'block';

    questionText.innerHTML = "";
    inputContainer.innerHTML = "";

    questionText.innerHTML = currentQuestion.question;

    const inputAnswer = document.createElement("textarea");
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
    inputAnswer.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            checkAnswerTwo(inputAnswer.value);
        }
    });
}


function checkAnswerTwo(userInput) {
    const currentQuestion = quizQuestionsTwo[newQuestionIndexTwo];
    const correctAnswer = currentQuestion.correctAnswer;

    const cleanUserInput = userInput.trim().toLowerCase().replace(/[^\w\s]/g, '');
    const cleanCorrectAnswer = correctAnswer.trim().toLowerCase().replace(/[^\w\s]/g, '');

    if (cleanUserInput === cleanCorrectAnswer) {
        document.getElementById('result').textContent = 'Correct!';
        document.getElementById('result').style.color = 'green';
        newScoreTwo++;
    } else {
        document.getElementById('result').textContent = 'Incorrect. The correct answer is: ' + correctAnswer;
        document.getElementById('result').style.color = 'red';
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
