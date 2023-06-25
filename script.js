
function getComputerChoice (computerSelection){
    let choiceNum = Math.floor(Math.random() * 3)

    if (choiceNum == 0){
       computerSelection = "rock"
    }
    else if (choiceNum == 1){
       computerSelection = "paper"
    }
    else if (choiceNum == 2){
       computerSelection = "scissors"
    }
    console.log(computerSelection)
    return choiceNum
};
function getPlayerInput(){
   var playerInput = window.prompt("rock, paper, scissors")
   var playerSelection = playerInput.toLowerCase();
   return playerSelection
};
function singleRound (playerSelection, computerChoice){  
if ((playerSelection == "rock" && computerChoice == 0) ||
   (playerSelection == "paper" && computerChoice == 1) ||
   (playerSelection == "scissors" && computerChoice == 2)){
    console.log("we may be equals, but we are not on the same level")
 }
 else if ((playerSelection == "rock" && computerChoice == 1)||
          (playerSelection == "paper" && computerChoice == 2)||
          (playerSelection == "scissors" && computerChoice == 0)){
            console.log("you lose this one pal")
 }
 else if ((playerSelection == "rock" && computerChoice == 2)||
          (playerSelection == "paper" && computerChoice == 0)||
          (playerSelection == "scissors" && computerChoice == 1)){
            console.log("you got me now, but the war ain't over")
 }
};
function game (){

   for (var i = 0; i < 5; i++) {
      var playerChoice = getPlayerInput();
      var computerChoice = getComputerChoice();
      singleRound(playerChoice, computerChoice)
   }
}; 
game();

