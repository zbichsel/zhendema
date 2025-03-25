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
        question: "你叫什么名字？",
        options: ["What time is it?", "Do you like to eat Korean food?", "What's your name?", "What time should we go to the supermarket?"],
        correctAnswer: "What's your name?"
    },
    {
        question: "他是我的新老师。",
        options: ["She is our teacher", "He is going to the park", "He has give yuan.", "He is my new teacher."],
        correctAnswer: "He is my new teacher."
    },
    {
        question: "哎呀，今天我有三节课。",
        options: ["I have math class.", "Uh oh, I have a new class.", "Oh no, I have three classes today.", "Do you like going to school?"],
        correctAnswer: "Oh no, I have three classes today."
    },
    {
        question: "嗨，凯文，很高兴认识你。",
        options: ["Hi, Kevin, nice to meet you.", "Hi, Mary, nice to meet you.", "Hi, Mary, welcome.", "Hi, Kevin, have a great day."],
        correctAnswer: "Hi, Kevin, nice to meet you."
    },
    {
        question: "凯文和我都有一节课。",
        options: ["We, both, have class today.", "Kevin and I, both, have a class.", "Mary and I, both, have history class.", "Kevin is my history teacher."],
        correctAnswer: "Kevin and I, both, have a class."
    },
    {
        question: "我去第二站台。",
        options: ["There are 3 platforms.", "I am going to the first platform.", "I have a new car.", "I am going to the second platform."],
        correctAnswer: "I am going to the second platform."
    },
    {
        question: "北京很有名。",
        options: ["Beijing is famous.", "Beijing is a big city.", "Beijing is a small city.", "Beijing is my hometown."],
        correctAnswer: "Beijing is famous."
    },
    {
        question: "地铁很便宜。",
        options: ["The subway is expensive.", "The subway is cheap.", "The subway is fast.", "The subway is slow."],
        correctAnswer: "The subway is cheap."
    },
    {
        question: "玛丽，你会怎么去机场？",
        options: ["Mary, how will you go to the airport?", "Mary, do you like to go to the airport?", "Mary, when do you go to the airport?", "Mary, where is the airport?"],
        correctAnswer: "Mary, how will you go to the airport?"
    },
    {
        question: "北京很远，我会坐飞机。",
        options: ["Beijing is far, I will go by bus.", "Beijing is far, I will take a taxi.", "Beijing is far, I will take a train.", "Beijing is far, I will take a plane."],
        correctAnswer: "Beijing is far, I will take a plane."
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
        question: "这四个包子多少钱？",
        correctAnswer: "How much are these four buns?"
    },
    {
        question: "那三瓶牛奶八元。",
        correctAnswer: "Those three bottles of milk are eight yuan."
    },
    {
        question: "我想送她一条白色的围巾。",
        correctAnswer: "I want to give her a white scarf."
    },
    {
        question: "你想喝一杯咖啡还是茶？",
        correctAnswer: "Would you like to drink a cup of coffee or tea?"
    },
    {
        question: "那条绿色的裙子很有名。",
        correctAnswer: "That green skirt is famous."
    },
    {
        question: "玛丽会喜欢那条围巾吗？",
        correctAnswer: "Will Mary like that scarf?"
    },
    {
        question: "这条绿色的裙子很漂亮。",
        correctAnswer: "This green skirt is beautiful."
    },
    {
        question: "祝你生日快乐， 玛丽！",
        correctAnswer: "Happy birthday to you, Mary!"
    },
    {
        question: "我会坐公交车去长城。",
        correctAnswer: "I will take a bus to go to the Great Wall."
    },
    {
        question: "我会坐出租车去机场。",
        correctAnswer: "I will take a taxi to go to the airport."
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
        <h2>Quiz finished!</h2>
        <p>Your score: ${newScoreTwo} out of ${quizQuestionsTwo.length}</p>
        <p>Score Percentage: ${scorePercentage}%</p>
    `;
}

document.getElementById('new-start-button').addEventListener('click', startNewQuizTwo);
