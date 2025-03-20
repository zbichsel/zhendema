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

function createQuizStructure() {
    // Create the main quiz container
    const quizContainer = document.createElement('div');
    quizContainer.classList.add('quiz-container');

    // Create the question container
    const questionContainer = document.createElement('div');
    questionContainer.id = 'question-container';

    // Create the question text paragraph
    const questionText = document.createElement('p');
    questionText.id = 'question-text';

    // Create the answer buttons container
    const answerButtons = document.createElement('div');
    answerButtons.id = 'answer-buttons';

    // Append question text and answer buttons to the question container
    questionContainer.appendChild(questionText);
    questionContainer.appendChild(answerButtons);

    // Create the controls container
    const controlsContainer = document.createElement('div');
    controlsContainer.id = 'controls-container';

    // Create the timer container (initially hidden)
    const timerContainer = document.createElement('div');
    timerContainer.id = 'timer-container';
    timerContainer.hidden = false;  // Hide initially

    // Create the timer text
    const timerText = document.createElement('span');
    timerText.id = 'timer-text';
    timerText.textContent = 'Time Left: ';

    // Create the timer span
    const timer = document.createElement('span');
    timer.id = 'timer';
    timer.textContent = '60';  // Initial value of the timer

    // Append the timer elements
    timerText.appendChild(timer);
    timerContainer.appendChild(timerText);

    // Append the timer container to the controls container
    controlsContainer.appendChild(timerContainer);

    // Append the question container and controls container to the quiz container
    quizContainer.appendChild(questionContainer);
    quizContainer.appendChild(controlsContainer);

    // Append the entire quiz container to the body or a parent container
    document.body.appendChild(quizContainer);
}


function startQuizOne() {
    document.getElementById('start-button').style.display = 'none';
    document.getElementById('new-start-button').style.display = 'none';
    document.getElementById('grid-container').style.display = 'none';
    createQuizStructure();
    displayQuestionOne();
    startTimerOne();
}

function startTimerOne() {
    timerInterval = setInterval(function () {
        timeLeft--;
        document.getElementById('timer').textContent = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            endQuizOne();
        }
    }, 1000);
}

function displayQuestionOne() {
    const currentQuestion = quizQuestionsOne[currentQuestionIndexOne];
    const questionText = document.getElementById("question-text");
    const answerButtons = document.getElementById("answer-buttons");

    // Clear previous content
    questionText.innerHTML = "";
    answerButtons.innerHTML = "";

    // Display the current question
    questionText.innerHTML = currentQuestion.question;

    // Create answer buttons dynamically
    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.classList.add("answer-buttons");
        answerButtons.appendChild(button);

        // Add click event listener for checking the answer
        button.addEventListener("click", function () {
            checkAnswerOne(option);
        });
    });
}

function checkAnswerOne(selectedOption) {
    const currentQuestion = quizQuestionsOne[currentQuestionIndexOne];

    if (selectedOption === currentQuestion.correctAnswer) {
        score++;
    }

    // Move to the next question or end the quiz if it's the last question
    currentQuestionIndexOne++;

    if (currentQuestionIndexOne < quizQuestionsOne.length) {
        displayQuestionOne();  // Display the next question
    } else {
        endQuizOne();
    }
}

function endQuizOne() {
    // Clear the timer
    clearInterval(timerInterval);

    // Display the final score
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = `<h2>Quiz Finished!</h2><p>Your score: ${score} out of ${quizQuestionsOne.length}</p>`;
}

document.getElementById('start-button').addEventListener('click', startQuizOne);


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
    document.getElementById('grid-container').style.display = 'none';

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
