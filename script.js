
//html elements ///
const logo = document.getElementById('logo')
const welcomeMessage =document.getElementById('welcomeMessage')
const instructions =document.getElementById('instructions')
const startGamebtn = document.getElementById('startGamebtn')
const playBtn = document.getElementById('playBtn')
const scoreTimerBox =document.getElementById('scoreTimerBox')
const questionContainer = document.getElementById("questionContainer")
const optionsContainer = document.getElementById("optionsContainer")


// Trivia questions
const questions = [
    { question: "What is the first month of the Islamic calendar?", options: ["Muharram", "Safar", "Rabi' al-Awwal", "Ramadan"], correctAnswer: "Muharram" },
    { question: "During which month do Muslims fast from sunrise to sunset?", options: ["Shawwal", "Dhu al-Qi'dah", "Ramadan", "Dhu al-Hijjah"], correctAnswer: "Ramadan" },
    // need to add more questions 
]
let totalQuestions = questions.length
let answerQuestions = 0

let currentQuestionIndex =0
let score = 0

//funtion to show questions 
function displayQuestion() {
   
    const currentQuestion = questions[currentQuestionIndex]

    questionContainer.innerHTML = `<p>${currentQuestion.question}</p>`
    optionsContainer.innerHTML = currentQuestion.options.map(option => `<button id ='optionsBtn'onclick="checkAnswer('${option}')">${option}</button>`).join('')
}
function checkAnswer(playerAnswer) {
    const currentQuestion = questions[currentQuestionIndex];
    
    if (playerAnswer === currentQuestion.correctAnswer) {
        score++
        answerQuestions ++
        document.getElementById('score').innerText ='0' + score
        
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


