


//html elements ///
const logo = document.getElementById('logo')
const welcomeMessage =document.getElementById('welcomeMessage')
const instructions =document.getElementById('instructions')
const startGamebtn = document.getElementById('startGamebtn')
const playBtn = document.getElementById('playBtn')
const questionContainer = document.getElementById("questionContainer")
const optionsContainer = document.getElementById("optionsContainer")
const tryagain = document.getElementById("tryagain")
const restBtn =document.getElementById('restartBtn')
let currentQuestion

// Trivia questions
const questions = [
    { question: "What is the first month of the Islamic calendar?", options: ["Muharram", "Safar", "Rabi al-Awwal", "Ramadan"], correctAnswer: "Muharram" },
    { question: "During which month do Muslims fast from sunrise to sunset?", options: ["Shawwal","Dhu al-Qi dah", "Ramadan", "Dhu al-Hijjah"], correctAnswer: "Ramadan" },
    { question: " Which meal is consumed before dawn during Ramadan?", options:[ "Suhoor","Iftar","Taraweeh","Sahr"], correctAnswer:"Suhoor"},
    { question: "What is the evening meal that breaks the daily fast during Ramadan called?", options:["Suhoor","Fajr","Iftar","Qiyam"], correctAnswer: "Iftar"},
    { question: "How many pillars of Islam does fasting during Ramadan constitute?", options: ["2","3","4","5"], correctAnswer: "4"},
    { question:"What is the special night in Ramadan when the Quran was first revealed?", options:["Laylat al-Qadr","Eid al-Fitr","Laylat al-Miraj","Ashura"], correctAnswer:"Laylat al-Qadr"},
    {question: "What is the charity given by Muslims during Ramadan called?",options:["Sadaqah","Zakat","Khums","Fitrah"], correctAnswer:"Zakat"},
]


let totalQuestions = questions.length
let currentQuestionIndex =0
let score = 0
let attempts = 3

function startGame(){
    instructions.style.display ="none"
     displayQuestion()
     playBtn.style.display="none"
     scoreTimerBox.style.opacity ="1" 
    
   
    }

//funtion to show questions 
function displayQuestion(i) {
    restBtn.style.display="none"
    optionsContainer.style.display ="inline"
    questionContainer.style.display = "inline"
    currentQuestion = getRandomQuestion() //questions[currentQuestionIndex]
    questionContainer.innerHTML = `<p>${currentQuestion.question}</p>`
    optionsContainer.innerHTML = currentQuestion.options.map(option => `<button id ='optionsBtn'onclick="checkAnswer('${option}')">${option}</button>`).join('')
    
    document.getElementById('score').innerText ='Score:0' + score
     document.getElementById('attemps').innerText = `Attempt left: ${attempts}`
    
     
}
function getRandomQuestion(){
    let randomIndex = Math.floor(Math.random() * questions.length)
    return questions[randomIndex]
}
function checkAnswer(playerAnswer) {
    
    console.log(currentQuestion)
    console.log(playerAnswer)
    if (playerAnswer === currentQuestion.correctAnswer) {
        score++
        
        nextQuestion()
      //answerQuestions ++
    } else if (playerAnswer !== currentQuestion.correctAnswer && attempts > 0) {
        attempts --
        tryagain.innerHTML ="<h2>TRY AGAIN!</h2>"
        setTimeout(function(){
            document.getElementById("tryagain").innerHTML = ''
        }, 2000)
    

    }else {

        questionContainer.innerHTML = "<h2>Game Over!</h2>" + `<p>Your final score is: ${score}</p>`
        optionsContainer.style.display = 'none'
        tryagain.style.display = 'none'
        restBtn.style.display="inline-flex"
       
    }
    

}



  // Function to move to the next question
  function nextQuestion() {
    currentQuestionIndex++

    if (currentQuestionIndex < questions.length) {
        displayQuestion()

    } else {
        
        
        displayFinalScore() 
       
    }
}
  // Function to display the final score
  function displayFinalScore() {
    optionsContainer.style.opacity='0'
    questionContainer.innerHTML = "<h2>Congrats, !</h2>" + `<p>Your final score is: ${score}</p>`
    restBtn.style.display="inline-flex"

}


function resetGame (){
// totalQuestions = questions.length
// answerQuestions = 0
// score = 0
// attempts = 3
window.location.reload();
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


