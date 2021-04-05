
//create variables

var quizContainer = document.querySelector("#quiz");
var correctAnswer = document.querySelector("#answers");
var questionEl = document.querySelector("#question");
var startButton = document.querySelector("start");


var answer1EL = document.querySelector(".answer1");
var answer2El = document.querySelector(".answer2");
var answer3El = document.querySelector(".answer3");
var answer4El = document.querySelector(".answer4");
var answer5El = document.querySelector(".answer5");
var answerButtons = document.querySelectorAll(".answerbuttons");

var currentIndex = [0]


var questionsArray =[{

    question: "Why do the sharks attack Marlin and Dory in Finding Nemo?",

    answer1: "They are sharks, and sharks eat fish",
    answer2: "They got angry because Dory insulted them",
    answer3: "Marlin's nose starts to bleed",
    answer4: "There plan was to eat them all along",
    answer5: "They didn't attack, there was no shark scene",
    correctAnswer: "Marlin's nose starts to bleed"
    
 },
 {  
    question: "What song does Miguel sing to his grandma in Coco?",

    answer1: "La llorona",
    answer2: "Un Poco loco",
    answer3: "Remember me",
    answer4: "The world is my family",
    answer5: "El Latido de Mi Corazon",
    correctAnswer: "Remember Me"

 },

{
    question: "What kind Flavor of icecream does the abominable snowman give Sully and Mike in Monsters inc.?",

    answer1: "Vanilla",
    answer2: "Chocolate",
    answer3: "Lemon",
    answer4: "Rasberry Sorbet",
    answer5: "Mango Sorbet",
    correctAnswer: "Lemon"
},

{
    question: "What does Wall-e find in the refrigerator?",

    answer1: "Cockroach",
    answer2: "Milk",
    answer3: "Plant",
    answer4: "Eva",
    answer5: "Lighbulb",
    correctAnswer: "Plant"
},

{
    question: "What was the spice that Remy was looking for in the kitchen that lead to the rat colony being found in Ratatouille?",

    answer1: "Saffron",
    answer2: "Turmeric",
    answer3: "Cardamom",
    answer4: "Cayenne Pepper",
    answer5: "Black Pepper",
    correctAnswer: "Saffron"
},

{
    
    question: "Which of the following is not a Pixar Movie",

    answer1: "Cars",
    answer2: "Toy Story",
    answer3: "Shrek",
    answer4: "A Bugs Life",
    answer5: "Inside Out",
    correctAnswer: "Shrek"
}];

console.log(questionsArray.length)

function displayQuestions(){

    questionEl.textContent = questionsArray[currentIndex].question
    answer1El.textContent = questionsArray[currentIndex].answer1
    answer2El.textContent = questionsArray[currentIndex].answer2
    answer3El.textContent = questionsArray[currentIndex].answer3
    answer4El.textContent = questionsArray[currentIndex].answer4
    answer5El.textcontent = questionsArray[currentIndex].answer5
}



for (var i = 0; i < questionsArray.length; i++) { 
    questionsArray[currentIndex].question = "Why do sharks attack Marlin and Dory in finding Nemo?"
 
    console.log("Why do sharks attack Marlin and Dory in Finding Nemo?", answerButtons);
    if(userGuess === questionsArray[currentIndex].correctAnswer) {
        console.log("Correct")
        alert("Correct!")
        currentIndex++
        displayQuestion()
      } else {
        console.log("WRONG!")
      })s




