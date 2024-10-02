



let player = {
    name :"Sana",
    chips : 150
}


// array
let cards = []
let sum = 0

let hasBlackJack = false
 let isAlive = false

let message = ""





let messageEl = document.getElementById ("message-el")
let cardsEl = document.getElementById ("cards-el")
let sumEl = document.getElementById("sum-el")
let playerEl = document.getElementById ("player-el")


playerEl.textContent = player.name + " : £" + player.chips


    


//  for random card to generate 

function randomCard() {
    let randomNumber = Math.floor ( Math.random() * 13) + 1
   
    if ( randomNumber > 10 ) {
        return 10
    }
    else if ( randomNumber === 1) {
        return 11
    }
    else {return randomNumber}
    
    
}







function startGame (){

     isAlive = true
    //  calling random card function 
let firstCard = randomCard ()
let secondCard = randomCard()
cards = [firstCard, secondCard]
 sum = firstCard + secondCard


    playGame()
}

function playGame() {
      

       
         cardsEl.textContent = "Cards: " 
//  for loop for adding cards

for ( let i = 0; i < cards.length; i++) {

    cardsEl.textContent += cards[i] + " "}

        sumEl.textContent= "Sum: " + sum


if (sum <= 20) {
    message = "do you want another card?"
   
}
else if (sum == 21) {
    message = "you won!" 
    hasBlackJack = true
}

else  {
    message = "you lost!"
    isAlive = false
   
}
   

    messageEl.textContent =  message
    }

   function newCard(){
   
   
   
    if ( isAlive == true && hasBlackJack == false) {
    let card = randomCard ()
    sum += card
     
    cards.push (card)
    playGame()
    }
}

