const darkSwitch = document.querySelector("label");

const newGameButton = document.querySelector("#new");
const configButton = document.querySelector("#config");
const resetDataButton = document.querySelector("#reset");

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

const cWinsText = document.querySelector("#computer-game-wins");
const cMatchText = document.querySelector("#computer-match-wins");
const pWinsText = document.querySelector("#player-game-wins");
const pMatchText = document.querySelector("#player-match-wins");

const animation = document.querySelector("#animation");

newGameButton.addEventListener("click", () =>{
    newGame();
});

configButton.addEventListener("click", () =>{

});

resetDataButton.addEventListener("click", () =>{
    resetData();
});
rockButton.addEventListener("click", () =>{
    pMove = "rock";
    move();
});
paperButton.addEventListener("click", () =>{
    pMove = "paper";
    move();
});
scissorsButton.addEventListener("click", () =>{
    pMove = "scissors";
    move();
});

function resetData(){
    pWins, cWins, pMatches, cMatches = 0;
    scoreboardUpdate();
}

function scoreboardUpdate(pWins, cWins, pMatches, cMatches){
    cWinsText.textContent = cWins;
    cMatchText.textContent = cMatches;
    pWinsText.textContent = pWins;
    pMatchText.textContent = pMatches;
}

function setPMove(pMove, cMove){

}

let cMove = "";
        let pMove = "";
        let pWins = 0;
        let cWins = 0;
        let pMatches = 0;
        let cMatches = 0;
        let gameCount = 0;
        let computerMove;
        let isActive = false;

        function getComputerMove(){
            computerMove = Math.floor((Math.random(0,3) * 10) / 3.33);
            //Check randomly created number from line above
                //console.log(computerMove);
            switch(computerMove) {
                case 0:
                 cMove = "paper";
                break;
                case 1:
                 cMove = "rock";
                break;
                case 2:
                 cMove = "scissors";
                break;
                }
            //Check the switch output
        }

        function newGame(){
            scoreboardUpdate(pWins, cWins, pMatches, cMatches);
            if(gameCount >= 5){
                if(pWins > cWins){
                    alert("Player wins with " + pWins + " wins to the computer's shameful " + cWins + " wins.")
                    pMatches++;
                }
                else if(cWins>pWins){
                    alert("Computer wins with " + cWins + " wins to the player's shameful " + pWins + " wins.")
                    cMatches++;
                }
                matchOver();
            }
            else{
                getComputerMove();
                //console.log(cMove);
            }
        }
        function matchOver(){
            gameCount = 0;
            pWins = 0;
            cWins = 0;
            newGame();
        }

        function move(){
            cMove = cMove.toLowerCase();
            pMove = pMove.toLowerCase();
            //console.log(cMove + " " + pMove);
                switch(cMove){
                    case "rock":
                        switch(pMove){
                            case "paper":
                                alert("You played paper and your opponent played rock. You win!");
                                pWins ++;
                                gameCount++;
                            break;
                            case "rock":
                                alert("You played rock and your opponent played rock. Draw. The worst outcome.");
                                gameCount++;
                            break;
                            case "scissors":
                                alert("You played scissors and your opponent played rock. You lose and have unusable scissors.");
                                cWins++;
                                gameCount++;
                            break;
                        }
                        break;
                    case "paper":
                        switch(pMove){
                            case "paper":
                                alert("Double paper. Draw. The worst outcome.");
                                gameCount++;
                            break;
                            case "rock":
                                alert("Your rock done covered, yo. Computer wins.");
                                gameCount++;
                                cWins++;
                            break;
                            case "scissors":
                                alert("That paper is now confetti. Enjoy your party, computer loser!");
                                gameCount++;
                                pWins++;
                            break;
                        }
                        break;
                    case "scissors":
                        switch(pMove){
                            case "paper":
                                alert("The scissors have cut your paper into confetti. Computer wins.")
                                cWins++;
                                gameCount++;
                            break;
                            case "rock":
                                alert("ROCK SMASH SCISSORS! YOU VICTOR!")
                                pWins++;
                                gameCount++;
                            break;
                            case "scissors":
                                alert("You played scissors and your opponent played scissors. Draw. The worst outcome.")
                                gameCount++;
                            break;
                        }   
                    break;
                }
                newGame();
            }
            