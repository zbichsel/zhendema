var themeSwitcher = document.querySelector('#theme-switcher');
var container = document.querySelector('.container');

const playGame = document.querySelector('button');
const hero = document.getElementsByClassName('grid-container');
const zhendema = document.querySelector('h1');
const h2El = document.querySelector('h2');

// SET DEFAULT MODE TO DARK
var mode = 'dark';

// LISTEN FOR CLICK EVENT ON TOGGLE SWITCH
themeSwitcher.addEventListener('click', function () {
    // IF MODE IS DARK APPLY LIGHT BACKGROUND
    if (mode === 'dark') {
        mode = 'light';
        container.setAttribute('class', 'light');
    } else {
        // IF MODE IS LIGHT APPLY DARK BACKGROUND
        mode = 'dark';
        container.setAttribute('class', 'dark');
    }
});

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

var myQuestions = [
    {
        question: "你好！",
        answers: {
            a: "Hello",
            b: "Goodbye",
            c: "Thank you"
        },
        correctAnswer: "a"
    },
    {
        question: "你有一节历史课，对不对？",
        answers: {
            a: "You have a history class, right?",
            b: "You have a math class, right?",
            c: "You have a science class, right?"
        },
        correctAnswer: "a"
    },
    {
        question: "火车站在哪里？",
        answers: {
            a: "Where is the bus station?",
            b: "Where is the train station?",
            c: "Where is the airport?"
        },
        correctAnswer: "b"
    },
    {
        question: "你叫什么名字？",
        answers: {
            a: "Where are you?",
            b: "What time is it?",
            c: "What is your name?"
        },
        correctAnswer: "c"
    }
];

function buildQuiz(questions, quizContainer, resultsContainer, submitButton) {

    function showQuestions(questions, quizContainer) {
        // CODE GOES HERE
        // WE'LL NEED A PLACE TO STORE THE OUTPUT AND THE ANSWERS CHOICES
        var output = [];
        var answers;

        // FOR EACH QUESTION...
        for (var i = 0; i < questions.length; i++) {

            // FIRST RESET THE LIST OF ANSWERS
            answers = [];

            // FOR EACH AVAILABLE ANSWER TO THIS QUESTION...
            for (letter in questions[i].answers) {

                // ...ADD AN HTML RADIO BUTTON
                answers.push(
                    '<label>'
                        + '<input type="radio" name="question' + i + '" value="' + letter + '">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }

            // ADD THIS QUESTION AND ITS ANSWERS TO THE OUTPUT
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        // FINALLY COMBINE OUR OUTPUT LIST INTO ONE STRING OF HTML AND PUT IT ON THE PAGE
        quizContainer.innerHTML = output.join('');
    }

    function showResults(questions, quizContainer, resultsContainer) {

        // CODE GOES HERE
        // GATHER ANSWER CONTAINERS FROM QUIZ
        var answerContainers = quizContainer.querySelectorAll('.answers');

        // KEEP TRACK OF USER'S ANSWERS
        var userAnswer = '';
        var numCorrect = 0;

        // FOR EACH QUESTION...
        for (var i = 0; i < questions.length; i++) {

            // FIND SELECTED ANSWER
            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

            // IF ANSWER IS CORRECT
            if (userAnswer === questions[i].correctAnswer) {

                // ADD TO THE NUMBER OF CORRECT ANSWERS
                numCorrect++;

                // COLOR THE ANSWERS GREEN
                answerContainers[i].style.color = 'lightgreen';
            } else {
                
                // IF ANSWER IS WRONG OR BLANK
                // COLOR THE ANSWERS RED
                answerContainers[i].style.color = 'red';
            }
        }

        // SHOW NUMBER OF CORRECT ANSWERS OUT OF TOTAL
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    // SHOW THE QUESTIONS
    showQuestions(questions, quizContainer);

    // WHEN USER CLICKS SUBMIT, SHOW THE RESULTS
    submitButton.addEventListener('click', function () {
        showResults(questions, quizContainer, resultsContainer);
    });
}

// DISPLAY THE QUIZ
// buildQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

playGame.addEventListener('click', function () {
    buildQuiz(myQuestions, quizContainer, resultsContainer, submitButton);
    zhendema.style.display = 'none';
    playGame.style.display = 'none';
    hero[0].style.display = 'none';
    h2El.style.display = 'block';
    h2El.style.cursor = 'pointer';
    submitButton.style.display = 'block';
    h2El.addEventListener('click', function () {
        location.reload();
    });
});