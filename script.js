function changePage(){
    const logo = document.getElementById('logo')
    logo.style.width = "300px"
    logo.style.height = "200px"
    logo.style.marginLeft = '0'
    const welcomeMessage =document.getElementById('welcomeMessage')
    welcomeMessage.style.display ="none"
    const instructions =document.getElementById('instructions')
    welcomeMessage.textContent = instructions
    instructions.style.opacity ='2'
    const startGamebtn = document.getElementById('startGamebtn')
    startGamebtn.style.display ="none"
    const playBtn = document.getElementById('playBtn')
    playBtn.style.opacity ="2"
    
    
   
}
function hideBtn(){
   
}