

//  methods are functions () attach to an object
//  creating object after assingment operator {} inside a : instead of = and seprated by ,

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




// to log message on the screen
let messageEl = document.getElementById ("message-el")
let cardsEl = document.getElementById ("cards-el")
let sumEl = document.getElementById("sum-el")
let playerEl = document.getElementById ("player-el")

// calling from object name and the subname
playerEl.textContent = player.name + " : £" + player.chips

//  another way of doing get element by id is querySelector where selector are css selector such as bidy but you specify id #
//  you can also change the to class in html but use . instead of #
// e.g let sumEl = document.querySelector ("#sum-el")
    


//  for random card to generate 

function randomCard() {
    let randomNumber = Math.floor ( Math.random() * 13) + 1
    //  black jack range 1-13, 11-13 has value 10, Ace/1 has value 11

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
      

        //  to put  on the screen
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
    // console.log (message) for the message on console,  to log on the website use .textContent

    messageEl.textContent =  message
    }

   function newCard(){
   
    // console.log ("Drawing new card from the deck!")
    // to stop the new card from generating after losing or winning 
   
    if ( isAlive == true && hasBlackJack == false) {
    let card = randomCard ()
    sum += card
    // to add the card in an array, pop to remove
    cards.push (card)
    playGame()
    }
}

