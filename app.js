//time alloted in the timer variable
var timerCount = 60;

// variable connected to html timer
var timerEl = document.querySelector("#timer");

// starting variables
var startButton = document.querySelector("#start-button");
var startPage = document.querySelector("#start-page");
var quizPage = document.querySelector("#question-page");
var scorePage = document.querySelector("#highscore-page");
var score1span = document.querySelector("#score1");
var score2span = document.querySelector("#score2");
var score3span = document.querySelector("#score3");
var viewHighscore = document.querySelector("#veiw-highscores")
var timeIdentifier = document.querySelector("#time-identifier");
var homeButton = document.querySelector("#home");

// questions variables
var questionsPointer = 0;
var question = document.querySelector("#question");
var optionA = document.querySelector("#optionA");
var optionB = document.querySelector("#optionB");
var optionC = document.querySelector("#optionC");

//setting html timer to have the count in writing
timerEl.textContent = timerCount

//highscore function
viewHighscore.addEventListener("click", function () {
    startPage.setAttribute("class", "container hide");
    quizPage.setAttribute("class", "container hide");
    timerEl.setAttribute("class", "hide");
    scorePage.setAttribute("class", "");
    viewHighscore.setAttribute("class", "hide");
    timeIdentifier.setAttribute("class", "hide");
})

homeButton.addEventListener("click", function() {
    window.location.reload();
})

//timer variable set to clear at 0 seconds
startButton.addEventListener("click", function() {
    // timer = setInterval
    var timer = window.setInterval(function() {

        if (setQuestions) {
            timerCount--;
            timerEl.textContent = timerCount;
        }    
        
        if (timerCount <= 0 || questionsPointer === questions.length) {
            clearInterval(timer);
            quizPage.setAttribute("class", "container hide");
            startPage.setAttribute("class", "container");
            timerEl.setAttribute("class", "hide");
            alert("You have run out of time. Reload page and try again.");
            if (alert) {
                timerCount = 60;
                window.location.reload();
            }
        }
    
    }, 1000);
    
    setQuestions();

    startPage.setAttribute("class", "container hide");
    quizPage.setAttribute("class", "container");
    timerEl.setAttribute("class", "");
    timerCount = 60;
    timerEl.removeAttribute("class");

});

// function to run through the questions
function setQuestions() {
    clearInterval(timer);

    if (questionsPointer === questions.length) {
        // clearInterval(timer);
        alert("you are done with " + timerCount + " out of 60 seconds");
        console.log(timerCount);
        var scoreInitial = prompt("Please write initials to add to your score.")

        //highscore variables
        var scoreStore = {
            initial: scoreInitial,
            timeLeft: timerCount,
        }

        localStorage.setItem("Score save", JSON.stringify(scoreStore));

        // var lastHighscore = localStorage.getItem("Score save");
        // score1span.textContent = lastHighscore.timerLeft;
        //was not able to get this to work

        quizPage.setAttribute("class", "container hide")
        startPage.setAttribute("class", "contianer")
        timerEl.setAttribute("class", "hide");
        questionsPointer = 0;
        timerCount = 60;
        if (prompt) {
            window.location.reload();
        };
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