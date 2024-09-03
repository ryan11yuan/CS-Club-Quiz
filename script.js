const questions = [
    {
        question: "Which of the following is used to style a webpage?",
        options: ["SQL", "JavaScript", "HTML", "CSS"],
        correctAnswer: 3
    },
    {
        question: "What is the purpose of the <title> tag in an HTML document?",
        options: [" To add a title to the body of the webpage", "To set the title of the webpage that appears in the browser tab", "To add a heading to the webpage", "To include a subtitle in the webpage"],
        correctAnswer: 1
    },
    {
        question: "What is HTML used for?",
        options: ["Making pictures", "Writing text", "Building websites", "Creating music"],
        correctAnswer: 2    
    },
    {
        question: "What is a simple way to organize numbers in order?",
        options: ["Sorting", "Typing", "Drawing", "Calculatings"],
        correctAnswer: 0    
    },
    {
        question: "What is a variable in a program?",
        options: ["A button on the screen", "An abstract storage location", "A picture on a webpage", "A line of code"],
        correctAnswer: 1    
    },
    {
        question: "What is a loop in programming used for?",
        options: ["To repeat actions multiple times", "To draw shapes", "To stop the program", "To save the program"],
        correctAnswer: 0
    }
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
    document.getElementById('start').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    loadQuestion();
}

function loadQuestion() {
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const currentQuizQuestion = questions[currentQuestion];

    questionElement.textContent = currentQuizQuestion.question;
    optionsElement.innerHTML = '';

    for (let i = 0; i < currentQuizQuestion.options.length; i++) {
        const option = currentQuizQuestion.options[i];
        optionsElement.innerHTML += `
            <label class="option">
                <input type="radio" name="quiz" value="${i}">
                ${option}
            </label>
        `;
    }
}

function submitAnswer() {
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    if (selectedOption) {
        const answer = parseInt(selectedOption.value);
        if (answer === questions[currentQuestion].correctAnswer) {
            score++;
        }
        currentQuestion++;
        if (currentQuestion < questions.length) {
            loadQuestion();
        } else {
            displayResult();
        }
    }
}

function displayResult() {
    document.getElementById('quiz').style.display = 'none';
    document.getElementById('result').style.display = 'block';
    document.getElementById('score').textContent = `You scored ${score} out of ${questions.length}!`;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    document.getElementById('result').style.display = 'none';
    document.getElementById('quiz').style.display = 'block';
    loadQuestion();
}