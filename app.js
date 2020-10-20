var timer = document.querySelector("#timer")
var time = document.querySelector("#time")
var seconds = document.querySelector("#seconds")
var veiwHigh = document.querySelector("#veiw-highscores")
var start = document.querySelector("#start")



//when clicking start, timer counts down and quiz starts
//timer begins at 60 counts down 1 per second
//first question will pop up
start.addEventListener("click", function() {
    var counter = 60;
    var interval = setInterval(function() {
        counter--;
        if (counter <= -1) {
            //test is done
            return;
        }else{
            time.textContent = (` ${counter} `);
            console.log("Timer: " + counter);
        }
    }, 1000);
})


//when i answer questions, I get another question
//their will be 7 questions, all multiple choice with four answers

//when i answer incorrectly, time is subtracted from the timer
// if correct continue to next question, if wrong, subtract 5 sec from timer and continue to next question

//when all questions are answered or timer goes to 0, then game is over
//prompt user that they are done, and show their score and how much questions were correct
//if there is time, add a function to add points based off of seconds left on timer and maybe add more time for every right question??

// when it is finished, allow user to save their score with initials
// prompt user to write initials, maximum letters of 3 maybe
// add score to list that has top 10 scores saved in order of best to worst
//if there is time, add a time stamp to show when the score was completed

//when clicking veiw highscores show top 10 highest scores logged down with initials
veiwHigh.addEventListener("click", function(event) {
    event.preventDefault();

})