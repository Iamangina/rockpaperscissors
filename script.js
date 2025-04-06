let choice= ["rock", "paper", "scissors"];
let ComputerChoice;
function getComputerChoice(){
ComputerChoice= Math.random();
ComputerChoice= ComputerChoice * choice.length;
ComputerChoice= Math.floor(ComputerChoice);
ComputerChoice= choice[ComputerChoice];
return(ComputerChoice)}
getComputerChoice();

let UserChoice;
function getUserChoice(){
UserChoice= prompt("Choose: rock, paper scissors");
UserChoice= String(UserChoice);
UserChoice= UserChoice.toLowerCase();}
getUserChoice();


let userScore= 0;
userScore=Number(userScore);
let computerScore= 0;
computerScore=Number(computerScore);

let result;
function playRound(UserChoice,ComputerChoice){
if (UserChoice===ComputerChoice){
    result=("DRAW");
} else if (UserChoice==="rock" && ComputerChoice==="scissors" || UserChoice==="paper" && ComputerChoice==="rock" || UserChoice==="scissors" && ComputerChoice==="paper"){
    result=("YOU WIN")
    userScore= ++(userScore);
} else {
    result=("YOU LOSE");
    computerScore= ++(computerScore);
}}
playRound(UserChoice,ComputerChoice);
alert(result+" "+ userScore +":"+ computerScore);

function playGame(getComputerChoice,getUserChoice,playRound){
getComputerChoice();
getUserChoice();
playRound(UserChoice,ComputerChoice);
alert(result+" "+ userScore +":"+ computerScore);}

playGame(getComputerChoice,getUserChoice,playRound);
playGame(getComputerChoice,getUserChoice,playRound);
playGame(getComputerChoice,getUserChoice,playRound);
playGame(getComputerChoice,getUserChoice,playRound);
playGame(getComputerChoice,getUserChoice,playRound);

alert("The final result is " + userScore+":"+computerScore);

