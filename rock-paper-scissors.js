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
    const div = document.querySelector("div");
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
        }
        else
        {
            newContent.textContent = "You lose! Paper beats rock!";
            div.appendChild(newContent);
        }
    }
    else if (playerSelection == "SCISSORS")
    {
        if (computerSelection == "ROCK")
        {
            newContent.textContent = "You lose! Rock beats scissors";
            div.appendChild(newContent);
        }
        else if (computerSelection == "SCISSORS")
        {
            newContent.textContent= "Tied! You both picked scissors!";
            div.appendChild(newContent);
        }
        else
        {
            newContent.textContent = "You win! Scissors beats paper!";
        } 
    }
    else if (playerSelection == "PAPER")
    {
        if (computerSelection == "ROCK")
        {
            newContent.textContent = "You win! Paper beats rock!";
            div.appendChild(newContent);
        }
        else if (computerSelection == "SCISSORS")
        {
            newContent.textContent = "You lose! Scissors beats paper!";
            div.appendChild(newContent);
        }
        else
        {
            newContent.textContent = "Tied! You both picked paper!";
            div.appendChild(newContent);
        }  
    }
}

const buttons = document.querySelectorAll("button");


buttons.forEach(button => button.addEventListener('click', playRound));