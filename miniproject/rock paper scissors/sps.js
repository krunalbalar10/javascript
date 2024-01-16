let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");

const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

//third step
const genCompChoice = () => {
    const option = ["rock" , "paper" , "scissors"];
    // math.floor is used for remove desimal number after point
    // like 2.34334345 output gives  2.
    // math.random used for taking any number if you want specific range then you
    //have to use * 3 will give you 0 to 2 number .here you can multiply any number 
    const randIdx = Math.floor(Math.random() * 3);
    // console.log(randIdx);
    return option[randIdx];
    //rock , paper , scissors
}

//forth step
const drawGame = () => {
    console.log("Game is draw.");
    msg.innerText = "Game is Draw. Play again";
    msg.style.backgroundColor = "blue";

}

//fifth step
const showWinner = (userWin , userChoice , compChoice) => {
    if (userWin){
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else
    {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You Lose! ${compChoice} beats your ${compChoice}`;
        msg.style.backgroundColor = "red";

    }
};

//second step
const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //Generate computer choice
    const compChoice = genCompChoice();
    console.log("Computer choice = ", compChoice);

    if(userChoice === compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissors , paper
            userWin = compChoice === "paper"? false: true;
        }
        else if(userChoice === "paper")
        {
            //rock , scissor
            userWin = compChoice === "scissors" ? false: true;
        }
        else {
            //rock , paper
            userWin = compChoice === "rock" ? false:true;
        }
        showWinner(userWin , userChoice , compChoice);
    }
}

//first step
choices.forEach((choice) => {
    console.log(choice);
    choice.addEventListener("click" , () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
;    });
});