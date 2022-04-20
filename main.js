let correctNumber = Math.floor(Math.random() * 15)


let guessed = false
let totalGuesses = 0
let gamerGuess = 0
correctNumber += 1

function evalGuess(){
 totalGuesses++
 gamerGuess = document.querySelector('#guess').value

 const feedback = document.querySelector('#feedback')
 
 if (gamerGuess == correctNumber){
  feedback.innerText = "That's correct!"
  giveAward()
 } else if (gamerGuess > correctNumber && gamerGuess < 16){
  feedback.innerText = "Too high, try again!"
 } else if (gamerGuess < correctNumber && gamerGuess > 0){
   feedback.innerText ="Too low, try again!"
 } else{
     feedback.innerText = "Please enter a number between 0 and 16"
     totalGuesses--
 }

 document.querySelector("#attempts").innerText = totalGuesses

}

const ribbon = document.querySelector('#ribbon')

function giveAward(){
let imagePath = '#'
switch(totalGuesses){
    case 1:
    case 2:
    case 3:
        imagePath = 'images/blue.jpg'
       ribbon.innerText = "You've earned a Blue Ribbon!"
       break;
    case 4:
    case 5:
    case 6:
        imagePath = 'images/red.jpg'
        ribbon.innerText = "You've earned a Red Ribbon!"
        break;
    case 7:
    case 8:
    case 9:
        imagePath ="images/yellow.jpg"
        ribbon.innerText = "You've earned a Yellow Ribbon"

}

const awardImage = document.createElement('img')
awardImage.setAttribute('src', imagePath)
if(ribbon.hasChildNodes()){
    ribbon.appendChild(awardImage)
}



}