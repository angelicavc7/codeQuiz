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
    var ViewHighscoreBtn = document.querySelector("#viewhighscore") 
    


    var quizEl = document.querySelector("#quiz");
    var messageEl = document.querySelector("#message");
    var right = document.querySelector('#right')
    var done = document.querySelector("#done")
    var view = document.querySelector("#view")
    var tableScores = document.querySelector("#tableScores")
    var finalScoreEl = document.querySelector("#score");
    var timeEl = document.querySelector("#seconds");
    var initials = document.querySelector("#initials2")
    var userScore = document.querySelector("#list")

    var userScoreEl = document.querySelector("#userScore");
    var listEl = document.querySelector("#list");
   
    var currentIndex = 0;
    var score = 0
    var endQuiz = false;
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
  timeEl.textContent = secondsLeft;
  if(secondsLeft === 0) {
      clearInterval(timerInterval);  
  } else if (endQuiz === true){
      clearInterval(timerInterval)
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
          secondsLeft = secondsLeft+15;
          console.log("score is:" + score)
          right.textContent = "You got it right!";
          console.log("You got it right");
        } else {
          secondsLeft = secondsLeft-15;
          right.textContent = "WRONG!!";
          console.log("WRONG");
        }
        currentIndex++;
        console.log(currentIndex, questionsArray.length);
        if (currentIndex === questionsArray.length) {
          console.log("game over");
          totalScore = score
          console.log("score", score)
          finalScore()
          
        } else {
          displayQuestion();
        }
      });
    });

    function finalScore(){
        quizEl.setAttribute("style", "display: none");
        view.setAttribute("style", "display: none")
        done.setAttribute("style","display:flex");
        finalScoreEl.textContent = score;
        endQuiz = true;

        submitBtn.addEventListener("click", function(event){
            event.preventDefault();

            var result = {
                initials: initials.value,
                finalScoreEl: score
            };
          localStorage.setItem("result", JSON.stringify(result));
          highScores()
      
        })
      }
  
      function highScores(){
        done.setAttribute("style", "display: none");
        view.setAttribute("style", "display: flex");
          var list = [];
          function renderList() {
            userScore.innerHTML = "";
            // Render a new li 
            for (var i = 0; i < list.length; i++) {
              var listEl = list[i];
              var li = document.createElement("li");
              li.textContent = listEl;
              li.setAttribute("data-index", initials, finalScoreEl);
              li.appendChild(i);
            userScore.appendChild(li);
          }
      }
          function init() {
          var storedlist = JSON.parse(localStorage.getItem("list"));
            if (storedlist !== null) {
             list = storedlist;
            }
           renderList();
          }
        function storeList() {
          localStorage.setItem("list", JSON.stringify(list));
        }
        storeList();
        renderList();
        init()
          
      }
  //couldnt get highscores to show up on the listed items

      backBtn.addEventListener("click", function() {
        messageEl.setAttribute("style", "display: flex");
        quizEl.setAttribute("style", "display: none")
        view.setAttribute("style","display:none");
        startTimer();
      })
    
      ViewHighscoreBtn.addEventListener("click", function(){
        messageEl.setAttribute("style", "display: none"); 
      finalScore()
    })
   
    startBtn.addEventListener("click", function () {
      toggleElementDisplay(messageEl);
      startTimer();
      toggleElementDisplay(quizEl);
    })
    displayQuestion()