
//html elements ///
const logo = document.getElementById('logo')
const welcomeMessage =document.getElementById('welcomeMessage')
const instructions =document.getElementById('instructions')
const startGamebtn = document.getElementById('startGamebtn')
const playBtn = document.getElementById('playBtn')
const scoreTimerBox =document.getElementById('scoreTimerBox')
const questionContainer = document.getElementById("questionContainer")
const optionsContainer = document.getElementById("optionsContainer")
const tryagain = document.getElementById("tryagain")

// Trivia questions
const questions = [
    { question: "What is the first month of the Islamic calendar?", options: ["Muharram", "Safar", "Rabi al-Awwal", "Ramadan"], correctAnswer: "Muharram" },
    { question: "During which month do Muslims fast from sunrise to sunset?", options: ["Shawwal", "Dhu al-Qi'dah", "Ramadan", "Dhu al-Hijjah"], correctAnswer: "Ramadan" },
    { question: " Which meal is consumed before dawn during Ramadan?", options:[ "Suhoor","Iftar","Taraweeh","Sahr"], correctAnswer:"Suhoor"},
    { question: "What is the evening meal that breaks the daily fast during Ramadan called?", options:["Suhoor","Fajr","Iftar","Qiyam"], correctAnswer: "Iftar"},
    { question: "How many pillars of Islam does fasting during Ramadan constitute?", options: ["2","3","4","5"], correctAnswer: "4"},
    { question:"What is the special night in Ramadan when the Quran was first revealed?", options:["Laylat al-Qadr","Eid al-Fitr","Laylat al-Miraj","Ashura"], correctAnswer:"Laylat al-Qadr"},
    {question: "What is the charity given by Muslims during Ramadan called?",options:["Sadaqah","Zakat","Khums","Fitrah"], correctAnswer:"Zakat"},
    

    // need to add more questions 
]
let totalQuestions = questions.length
let answerQuestions = 0

let currentQuestionIndex =0
let score = 0
let maxAttempts = 3 
let attempts = 0

//funtion to show questions 
function displayQuestion() {
   
    const currentQuestion = questions[currentQuestionIndex]

    questionContainer.innerHTML = `<p>${currentQuestion.question}</p>`
    optionsContainer.innerHTML = currentQuestion.options.map(option => `<button id ='optionsBtn'onclick="checkAnswer('${option}')">${option}</button>`).join('')
}
function checkAnswer(playerAnswer) {
    const currentQuestion = questions[currentQuestionIndex];
    
    if (playerAnswer === currentQuestion.correctAnswer && attempts < maxAttempts ) {
        score++
        answerQuestions ++
        attempts = 0
        document.getElementById('score').innerText ='0' + score
        nextQuestion()
        tryagain.style.display ="none"
         
    } else if (playerAnswer !== currentQuestion.correctAnswer && attempts < maxAttempts) {
        attempts ++
        tryagain.innerHTML ="<h2>Try again</h2>"
       

    }else {

        displayFinalScore()

    }

    // Move to the next question
  

}
  // Function to move to the next question
  function nextQuestion() {
    currentQuestionIndex++
/// I want to add if else 
    if (currentQuestionIndex < questions.length) {
        displayQuestion()

    } else {
        // Game over
        optionsContainer.style.opacity='0'
        questionContainer.innerHTML = "<h2>Game Over!</h2>" + `<p>Your final score is: ${score}</p>`
       
    }
}
  // Function to display the final score
  function displayFinalScore() {

    questionContainer.innerHTML = "<h2>Game Over!</h2>" + `<p>Your final score is: ${score}</p>`

}


function changePage(){
    logo.style.width = "300px"
    logo.style.height = "200px"
    logo.style.marginLeft = '0'
    welcomeMessage.style.display ="none"
    welcomeMessage.textContent = instructions
    instructions.style.opacity ='2'
    
    startGamebtn.style.display ="none"
   
    playBtn.style.opacity ="2"
    
    
   
}


function startGame(){
   instructions.style.display ="none"
 displayQuestion()
 playBtn.style.display="none"
 scoreTimerBox.style.opacity ="1"


   

}


