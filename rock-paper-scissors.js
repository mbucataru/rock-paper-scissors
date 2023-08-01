const score = document.querySelector(".score");
let playerScore = 0;
let computerScore = 0;
score.textContent = `${playerScore} - ${computerScore}`;
function getComputerChoice()
{
    const random = Math.random() * 100;
    if (random < 33)
    {
        return "Scissors";
    }
    else if (random < 66)
    {
        return "Rock";
    }
    else
    {
        return "Paper";
    }
}

function playRound(e)
{
    const div = document.querySelector(".match-history");
    const newContent = document.createElement("div");
    playerSelection = this.classList.value.toUpperCase();
    computerSelection = getComputerChoice().toUpperCase();
    if (playerSelection == "ROCK")
    {
        if (computerSelection == "ROCK")
        {
            newContent.textContent = "Tied! You both picked rock!";
            div.appendChild(newContent);
        }
        else if (computerSelection == "SCISSORS")
        {
            newContent.textContent = "You win! Rock beats scissors!";
            div.appendChild(newContent);
            playerScore++;
        }
        else
        {
            newContent.textContent = "You lose! Paper beats rock!";
            div.appendChild(newContent);
            computerScore++
        }
    }
    else if (playerSelection == "SCISSORS")
    {
        if (computerSelection == "ROCK")
        {
            newContent.textContent = "You lose! Rock beats scissors";
            div.appendChild(newContent);
            computerScore++;
        }
        else if (computerSelection == "SCISSORS")
        {
            newContent.textContent= "Tied! You both picked scissors!";
            div.appendChild(newContent);
        }
        else
        {
            newContent.textContent = "You win! Scissors beats paper!";
            div.appendChild(newContent);
            playerScore++;
        } 
    }
    else if (playerSelection == "PAPER")
    {
        if (computerSelection == "ROCK")
        {
            newContent.textContent = "You win! Paper beats rock!";
            div.appendChild(newContent);
            playerScore++
        }
        else if (computerSelection == "SCISSORS")
        {
            newContent.textContent = "You lose! Scissors beats paper!";
            div.appendChild(newContent);
            computerScore++;
        }
        else
        {
            newContent.textContent = "Tied! You both picked paper!";
            div.appendChild(newContent);
        }  
    }
    score.textContent = `${playerScore} - ${computerScore}`;
}

const buttons = document.querySelectorAll("button");


buttons.forEach(button => button.addEventListener('click', playRound));