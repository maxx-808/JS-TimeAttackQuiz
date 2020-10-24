//time alloted in the timer variable
var timerCount = 60;

// variable connected to html timer
var timerEl = document.querySelector("#timer");

// starting variables
var startButton = document.querySelector("#start-button");
var startPage = document.querySelector("#start-page");
var quizPage = document.querySelector("#question-page");

// questions variables
var questionsPointer = 0;
var question = document.querySelector("#question");
var optionA = document.querySelector("#optionA");
var optionB = document.querySelector("#optionB");
var optionC = document.querySelector("#optionC");

//setting html timer to have the count in writing
timerEl.textContent = timerCount

//timer variable set to clear at 0 seconds
startButton.addEventListener("click", function() {

    var timer = window.setInterval(function() {
        timerCount--;
        timerEl.textContent = timerCount;
        
        if (timerCount <= 0 || questionsPointer === questions.length) {
            clearInterval(timer);
            quizPage.setAttribute("class", "container hide");
            startPage.setAttribute("class", "container");
            alert("You have run out of time. Reload page and try again.");
            return;
        }

    }, 1000);
    
    setQuestions();

    startPage.setAttribute("class", "container hide");
    quizPage.setAttribute("class", "container");
    timerCount = 60;
    timerEl.removeAttribute("class");


});


// function to run through the questions
function setQuestions() {

    if (questionsPointer === questions.length) {
        alert("you are done with " + timerCount + " out of 60 seconds");
        console.log(timerCount);
        quizPage.setAttribute("class", "container hide")
        startPage.setAttribute("class", "contianer")
        timerEl.setAttribute("class", "hide");
        questionsPointer = 0;
        timerCount = 60;
    };

    question.textContent = questions[questionsPointer].q;
    optionA.textContent = questions[questionsPointer].choices[0];
    optionB.textContent = questions[questionsPointer].choices[1];
    optionC.textContent = questions[questionsPointer].choices[2];
}

//Options (answer 1,2,3 of every question)
optionA.addEventListener("click", function() {
    if (optionA.getAttribute("data-answer") === questions[questionsPointer].a) {
        console.log("this is correct");
        questionsPointer++;
        setQuestions();
    } else {
        console.log("wrong");
        timerCount -= 5;
    };
});

optionB.addEventListener("click", function() {
    if (optionB.getAttribute("data-answer") === questions[questionsPointer].a) {
        console.log("this is correct");
        questionsPointer++;
        setQuestions();
    } else {
        console.log("wrong");
        timerCount -= 5;
    };
});

optionC.addEventListener("click", function() {
    if (optionC.getAttribute("data-answer") === questions[questionsPointer].a) {
        console.log("this is correct");
        questionsPointer++;
        setQuestions();
    } else {
        console.log("wrong");
        timerCount -= 5;
    };
});

// all the questions
var questions = [
    {
        q: "What describes Javascript?",
        choices: [
            "The looks of the page.",
            "the Structure of the page.",
            "The function of the page."],
        a: "C"
    },
    {
        q: "Where does Javascript link to?",
        choices: [
            "The HTML file.",
            "The CSS file.",
            "The Local storage."],
        a: "A"
    },
    {
        q: "Is JQuery Javascript?",
        choices: [
            "Yes.",
            "No.",
            "I don't know."],
        a: "A"
    },
    {
        q: "How must the title of a Javascript file be written?",
        choices: [
            "Random title.",
            "With .code at the end of it.",
            "With .js at the end of it."],
        a: "C"
    },
    {
        q: "How do you create a variable that can't be changed?",
        choices: [
            "var.",
            "const.",
            "let."],
        a: "B"
    },
        {
        q: "How do you select something based of an id?",
        choices: [
            ".querySelector",
            ".getElementById",
            "Both can be used."],
        a: "C"
    },
    {
        q: "Is Javascript fun?",
        choices: [
            "YESSSSSS.",
            "No way.",
            "Kind of."],
        a: "A"
    }
];