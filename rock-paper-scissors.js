function getComputerChoice()
{
    let random = Math.random() * 100;
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

function playRound(playerSelection, computerSelection)
{
    playerSelection = playerSelection.toUpperCase();
    computerSelection = computerSelection.toUpperCase();
    if (playerSelection == "ROCK")
    {
        if (computerSelection == "ROCK")
        {
            return "Tied! You both picked rock!";
        }
        else if (computerSelection == "SCISSORS")
        {
            return "You win! Rock beats scissors!";
        }
        else
        {
            return "You lose! Paper beats rock!";
        }
    }
    else if (playerSelection == "SCISSORS")
    {
        if (computerSelection == "ROCK")
        {
            return "You lose! Rock beats scissors";
        }
        else if (computerSelection == "SCISSORS")
        {
            return "Tied! You both picked scissors!";
        }
        else
        {
            return "You win! Scissors beats paper!";
        } 
    }
    else if (playerSelection == "PAPER")
    {
        if (computerSelection == "ROCK")
        {
            return "You win! Paper beats rock!";
        }
        else if (computerSelection == "SCISSORS")
        {
            return "You lose! Scissors beats paper!";
        }
        else
        {
            return "Tied! You both picked paper!";
        }  
    }
    return "Invalid player input";
}

function game()
{
    let playerInput = prompt("Enter your choice");
    console.log(playRound(playerInput, getComputerChoice()));
}

for (let i = 0; i < 5; i++)
{
    game();
}