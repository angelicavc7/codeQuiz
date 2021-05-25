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
    answer2: "Remember me",
    answer3: "Un Poco loco",
    answer4: "The world is my family",
    correctAnswer: "Remember Me"

 },

{
    question: "What kind Flavor of icecream does the abominable snowman give Sully and Mike in Monsters inc.?",

    answer1: "Lemon",
    answer2: "Vanilla",
    answer3: "Chocolate",
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
      
      var questionEl = document.querySelector("#question");
      var answer1El = document.querySelector(".answer1");
      var answer2El = document.querySelector(".answer2");
      var answer3El = document.querySelector(".answer3");
      var answer4El = document.querySelector(".answer4");
     
      var answerButtons = document.querySelectorAll(".answer");
      var startBtn = document.querySelector(".button");
      var submitBtn = document.querySelector("#submit")
      var backBtn = document.querySelector("#back")
      var highscoreBtn = document.querySelector("#Highscores")  


      var quizEl = document.querySelector("#quiz");
      var messageEl = document.querySelector("#message");
      var right = document.querySelector('#right')
      var done = document.querySelector("#done")
      var view = document.querySelector("#view")
      var tableScores = document.querySelector("#tableScores")
      var finalScore = document.querySelector("#score");
      var timeEl = document.querySelector(".time");
     
      var currentIndex = 0;
      var score = 0
      var endQuiz = false;
      var gameTimer;
      var secondsLeft = 60;

      function displayQuestion() {
        questionEl.textContent = questionsArray[currentIndex].question
        answer1El.textContent = questionsArray[currentIndex].answer1
        answer2El.textContent = questionsArray[currentIndex].answer2
        answer3El.textContent = questionsArray[currentIndex].answer3
        answer4El.textContent = questionsArray[currentIndex].answer4
        // correctAnswer = questionsArray[currentIndex]
      } 

     function startTimer(){
        
//   Sets timer and interval in variable
    var timerInterval = setInterval(function() {
    secondsLeft--;
    timerEl.textContent = secondsLeft + "secondsLeft";
    timerEl.style.visibility = "visible"

    if(secondsLeft === 0) {
        clearInterval(timeEl);  
    } else if (endQuiz === true){
        clearInterval(timerEl)
    }
  }, 1000);

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
            score = score + 5;
            console.log("score is:" + score)
            right.textContent = "You got it right!";
            console.log("You got it right");
          } else {
            right.textContent = "WRONG!!";
            console.log("WRONG");
          }
          
          currentIndex++;
          console.log(currentIndex, questionsArray.length);
          if (currentIndex === questionsArray.length) {
            console.log("game over");
            finalScore()
            
          } else {
            displayQuestion();
          }
        });
      });

      function finalScore(){
        

        
        };

      startBtn.addEventListener("click", function () {
        toggleElementDisplay(messageEl)
        toggleElementDisplay(quizEl)
        toggleElementDisplay(done)
        toggleElementDisplay(view)
      })
      displayQuestion()
    