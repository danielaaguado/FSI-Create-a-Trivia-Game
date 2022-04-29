// Your Code Here

let userName = window.prompt('Please enter your name:')
let userScore = 0
let playAgain = true

function playGame() {
    
    for(let i = 0; i < questions.length; i++){
        let question = questions[i]
        let userAnswer = window.prompt(question.text)
    
        if(userAnswer === question.correctAnswer){
            userScore = userScore + 1
        }
    }
    
    window.alert(userName + " your score is: " + userScore)
    userScore = 0
}

while(playAgain === true){

    playGame()

    let userChoice = window.prompt("Would you like to play the game again? Yes or no.")
    if(userChoice === "yes"){

        playAgain = true

    }
    else if (userChoice === "no"){

        playAgain = false

    }
    else{

        window.alert("You didn't answer yes or no. Game continues.")

    }
}

