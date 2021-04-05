# codeQuiz
var questionsArray=[
{
   question: "How much do I love javascript?",
   answer1: "So much",
   answer2: "So much",
   answer3: "So much",
   answer4: "Too much",
   correctAnswer:"Too much"
},
...
{
   question: "How much do I love CSS?",
   answer1: "So much",
   answer2: "So much",
   answer3: "So much",
   answer4: "I don't",
   correctAnswer:"I don't"
}]
You should have at least 5 questions in your array.
Utilize your knowledge of javascript and DOM manipulation to have dedicated divs/p tags, etc in the HTML for the current question and the answers and update the content of those divs using JS. These elements should be empty in your HTML...you'll use javascript to populate them.  Have a basic wireframe of the layout and the html elements you'll be using will save you time.
Iterating over the questions array using a for loop in order to display the questions/answers won't work (you'll just end up displaying the last question).  You'll need to manually iterate over the questions array using an iterator variable that you create (var currentIndex=0).  Then use that variable when referencing the questions array (questionsArr[currentIndex].question === "How much do I love javascript?") .  When you're ready to move to the next question, increment your index variable and rerun your question display logic.
;

var questionsArray = [
  {
    question: "How much do I love javascript?",
    answer1: "So much",
    answer2: "So much",
    answer3: "So much",
    answer4: "Too much",
    correctAnswer: "Too much"
  },
  {
    question: "How much do I love CSS?",
    answer1: "So much",
    answer2: "So much",
    answer3: "So much",
    answer4: "I don't",
    correctAnswer: "I don't"
  }]
var currentIndex = 0;
var questionEl = document.querySelector("#question")
var answer1 = document.querySelector(".answer1")
var answer2 = document.querySelector(".answer2")
var answer3 = document.querySelector(".answer3")
var answer4 = document.querySelector(".answer4")
var answerButtons = document.querySelectorAll(".answer")
var startBtn = document.querySelector("button")
var gameEl = document.querySelector("#game")
var messageEl = document.querySelector("#message")
​
function displayQuestion() {
  questionEl.textContent = questionsArray[currentIndex].question
  answer1El.textContent = questionsArray[currentIndex].answer1
  answer2El.textContent = questionsArray[currentIndex].answer2
  answer3El.textContent = questionsArray[currentIndex].answer3
  answer4El.textContent = questionsArray[currentIndex].answer4
  answer5El.textcontent = questionsArray[currentIndex].answer5
}
​
/**
 * toggle an element's display on/off
 * @param {HTMLElement} element 
 */
 function toggleElementDisplay(element) {
  if (window.getComputedStyle(element).display === "none") {
    element.style.display = "block"
  } else {
    element.style.display = "none"
  }
}
​
//probably more useful in this case to have two functions with one purpose each
function show(element) {
  element.style.display = "block"
}
​
function hide(element) {
  element.style.display = "none"
}
​
answerButtons.forEach(function (ansBtn) {
  ansBtn.addEventListener("click", function (event) {
    var userGuess = event.target.textContent
    if (userGuess === questionsArray[currentIndex].correctAnswer) {
      console.log("You got it right")
      currentIndex++
      displayQuestion()
    } else {
      console.log("WRONG")
    }
  })
})
​
startBtn.addEventListener("click", function () {
  toggleElementDisplay(messageEl)
  toggleElementDisplay(gameEl)
})
​
displayQuestion()



for(var i = 0; i < questionsArray.length; i++){

    currentIndex = [0]
    questionsArray[currentIndex].question === "Why do the sharks attack Marlin and Dory in Finding Nemo?"
    questionText = questionsArray[currentIndex].question
    
    if (correctAnswer = questionsArray[currentIndex[i] {
        console.log("Correct!", correctAnswer)
        
    } else { console.log("WRONG!", correctAnswer)

    }