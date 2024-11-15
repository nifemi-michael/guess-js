
function randNum(guess, secret){
    
    if (guess == secret) {
     console.log("You won!");
    } 
    
    else if (guess < secret) {
    console.log("Too low!");
    } 
    
    else {
    console.log("Too high!");
    }
}
randNum(2, Math.floor(Math.random()*10 + 1))
