let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score")
let compScorePara = document.querySelector("#comp-score")
const getcompChoice = () =>{
    const options = ["stone","paper","scissors"];
   const randIdx = Math.floor(Math.random() * 3);
   return options[randIdx];
};
const drawGame = () => {
    // console.log("Game was draw");
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#3F5E5A"
}
const ShowWinner = (userWin,userChoice,compChoice)=>{
if(userWin === true){
    userScore++;
    userScorePara.innerText = userScore;
    console.log("you win");
    msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "Green";
}else{
        compScore++;
    compScorePara.innerText = compScore;
    console.log("you lose");
    msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
}
}
const playGame = (userChoice)=>{
console.log("User Choice = ",userChoice);
const compChoice = getcompChoice();
console.log("Computer Choice = ",compChoice);
if(userChoice === compChoice){
 drawGame();
} else {
    let userWin = true;
    if(userChoice === "stone"){
        userWin = compChoice === "paper" ? false : true;
    } else if(userChoice === "paper"){
      userWin = compChoice === "scissors" ? false : true;
    } else {
      userWin = compChoice === "stone" ? false : true;
    }
    ShowWinner(userWin, userChoice,compChoice);
}
}
choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
    // console.log("Choice was clicked", userChoice);
    playGame(userChoice); 
    });
});