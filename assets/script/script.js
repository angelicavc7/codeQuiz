
//create variables
var questionsArray = [{

    question: "Why do the sharks attack Marlin and Dory in Finding Nemo?",

    answer1: "They are sharks, and sharks eat fish",
    answer2: "They got angry because Dory insulted them",
    answer3: "Marlin's nose starts to bleed",
    answer4: "There plan was to eat them all along",
    correctAnswer: "Marlin's nose starts to bleed"
    
 },
 {  
    question: "What song does Miguel sing to his grandma in Coco?",

    answer1: "La llorona",
    answer2: "Un Poco loco",
    answer3: "Remember me",
    answer4: "The world is my family",
    correctAnswer: "Remember Me"

 },

{
    question: "What kind Flavor of icecream does the abominable snowman give Sully and Mike in Monsters inc.?",

    answer1: "Vanilla",
    answer2: "Chocolate",
    answer3: "Lemon",
    answer4: "Rasberry Sorbet",
    correctAnswer: "Lemon"
},

{
    question: "What does Wall-e find in the refrigerator?",

    answer1: "Cockroach",
    answer2: "Milk",
    answer3: "Plant",
    answer4: "Eva",
    correctAnswer: "Plant"
},

{
    question: "What was the spice that Remy was looking for in the kitchen that lead to the rat colony being found in Ratatouille?",

    answer1: "Saffron",
    answer2: "Turmeric",
    answer3: "Cardamom",
    answer4: "Cayenne Pepper",
    correctAnswer: "Saffron"
}];

      var currentIndex = 0;
      var questionEl = document.querySelector("#question");
      var answer1El = document.querySelector(".answer1");
      var answer2El = document.querySelector(".answer2");
      var answer3El = document.querySelector(".answer3");
      var answer4El = document.querySelector(".answer4");
     
      var answerButtons = document.querySelectorAll(".answer");
      var startBtn = document.querySelector(".button");
      var quizEl = document.querySelector("#quiz");
      var messageEl = document.querySelector("#message");
      var submitEl = document.querySelector("#submit")
      var backEl = document.querySelector("#back")
      var highschoreEl = document.querySelector("#highscores")
      var right = document.querySelector('#right')


      function displayQuestion() {
        questionEl.textContent = questionsArray[currentIndex].question
        answer1El.textContent = questionsArray[currentIndex].answer1
        answer2El.textContent = questionsArray[currentIndex].answer2
        answer3El.textContent = questionsArray[currentIndex].answer3
        answer4El.textContent = questionsArray[currentIndex].answer4
        // correctAnswer = questionsArray[currentIndex]
      } 

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
      //probably more useful in this case to have two functions with one purpose each
      function show(element) {
        element.style.display = "block"
      }
      function hide(element) {
        element.style.display = "none"
      }

      answerButtons.forEach(function (ansBtn) {
        ansBtn.addEventListener("click", function (event) {
          var userGuess = event.target.textContent;
          if (userGuess === questionsArray[currentIndex].correctAnswer) {
            right.textContent = "You got it right!";
            console.log("You got it right");
          } else {
            right.textContent = "YOU GO IT WRONG!!";
            console.log("WRONG");
          }
          currentIndex++;
          console.log(currentIndex, questionsArray.length);
          if (currentIndex === questionsArray.length) {
            console.log("game over");
            endGame();
          } else {
            displayQuestion();
          }
        });
      });
      startBtn.addEventListener("click", function () {
        toggleElementDisplay(messageEl)
        toggleElementDisplay(quizEl)
      })
      displayQuestion()






// startBtn.addEventListener("click", function () {
          
var timeEl = document.querySelector(".time");
// Selects element by id
var mainEl = document.getElementById("seconds");

var secondsLeft = 60;

    function startTimer() {
//   Sets interval in variable
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + "seconds left";

    if(secondsLeft === 0) {
//      Stops execution of action at set interval
      clearInterval(timerInterval);
//       Calls function to create and append image
      sendMessage();
    }

  }, 1000);
}
// })
// // Function to take away 15 seconds each time question answerer wrong 




