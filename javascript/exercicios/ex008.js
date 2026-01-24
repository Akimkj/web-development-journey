function winner(play1, play2) {
    if (play1 == play2) {
        return "draw"
    }
    if ((play1 == "paper" && play2 == "stone") || (play1 == "scissor" && play2 == "paper") || (play1 == "stone" && play2 == "scissor"))  {
        return "player1"
    }
    return "player2"
    
}

console.log(winner("stone", "paper"))