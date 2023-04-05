const questions = [
    {
        question: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
        correctAnswer: "answer#"
    },

    {
        question: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
        correctAnswer: "answer#"
    }

]

let shuffledQuestions = questions //array to hold shuffled questions

function handleQuestions() {
    //function to shuffle questions and push to shuffledQuestion array
    let currentIndex = shuffledQuestions.length, randomIndex;

    //While there remain elements to shuffle
    while (currentIndex != 0) {
        //Pick a random element
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        //Swap it with the current element
        [shuffledQuestions[currentIndex], shuffledQuestions[randomIndex]] = [shuffledQuestions[randomIndex], shuffledQuestions[currentIndex]];
    }
    indexNumber = 0
    nextQuestion(0)
}

//function for displaying next question in the array to dom
function nextQuestion(index) {
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("answer-one-label").innerHTML = currentQuestion.answer1;
    document.getElementById("answer-two-label").innerHTML = currentQuestion.answer2;
    document.getElementById("answer-three-label").innerHTML = currentQuestion.answer3;
    document.getElementById("answer-four-label").innerHTML = currentQuestion.answer4;
}

function revealAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctAnswer //gets current Question's answer
    const answers = document.getElementsByName("answer"); //gets all elements in dom with name of 'answer' (in this the radio inputs)
    let correctAnswer = null

    answers.forEach((answer) => {
        if (answer.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctAnswer = answer.labels[0].id
        }
    })

    answers.forEach((answer) => {
        document.getElementById(correctAnswer).style.backgroundColor = "limegreen"
    })
}

function nextQuestionPress() {
    indexNumber++
    const answers = document.getElementsByName("answer");
    answers.forEach((answer) => {
        document.getElementById(answer.labels[0].id).style.backgroundColor = ""
    })
    nextQuestion(indexNumber)
}