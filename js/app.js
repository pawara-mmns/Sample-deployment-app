let randomNumber = Math.floor(Math.random() *10 +1);
console.log(randomNumber);

let guessCount = 1;
 
function btnSubmitOnAction(){
    let userGuess = document.getElementById("txtGuess").value;
    if(userGuess == randomNumber){
        alert(`CONGRATULATIONS! You guessed it right! The number was ${randomNumber} guessed in ${guessCount} guesses.`);
    Swal.fire({
  title: "Custom width, padding, color, background.",
  width: 600,
  padding: "3em",
  color: "#716add",
  background: "#fff url(https://i.pinimg.com/originals/88/14/9b/88149b0400750578f4d07d9bc3fb0fee.gif)",
  backdrop: `
    rgba(0,0,123,0.4)
    url("https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExemh6eDNtMnZjM2t5ZHJqdnQ2ZjN6aTJiZ2V1OXB1dWV3NXRqbGM0NyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/zaqclXyLz3Uoo/giphy.gif")
    left top
    no-repeat
  ` 
});
    }else if(userGuess > randomNumber){
        guessCount++;
        alert("OOPS SORRY! tRY A SMALLER NUMBER");
    }else{
        guessCount++;
        alert("OOPS SORRY! tRY A BIGGER NUMBER");
    }
}
