// Accessing All the Element with their Id and Classes

let btns = document.querySelectorAll(".btn");
let reset = document.querySelector(".reset");
let newGamebtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");

//For Checking The Turn of Players
let turnX = true;

//All the position of buttons to win the Game
//in the form of array
const winPattern=[
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]
]; 

// function to print X and Y on buttons
btns.forEach((btns) => {
  //Adding click event on each button 
  btns.addEventListener("click", () => {
    console.log("btn clicked");
    if (turnX) {
      //Plaayer X
      
      btns.innerHTML = "X";
      turnX = false;
    } else {
      //Player O
      btns.innerHTML = "O";
      turnX = true;
    }
    btns.disabled = true;
    checkWin();
  });
}); 



// This function is used to check the winner
 const checkWin = () => { 
  for(let pattern of winPattern){
    // checking the pattern of winning
    let pos1Val =  btns[pattern[0]].innerHTML;
    let pos2Val =  btns[pattern[1]].innerHTML;
    let pos3Val =  btns[pattern[2]].innerHTML;

    if(pos1Val !="" && pos2Val !="" && pos3Val !=""){
      if(pos1Val === pos2Val && pos2Val === pos3Val){
       console.log(`Winner is ${pos1Val}`);
       showWinner(pos1Val);
      }
      
    }
    
  }
 
};
//To Show the Winner function on Screen
const showWinner = (winner) => {
  msg.innerHTML = `Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBtns();
}
// For disabling all the buttons after finding Winner
const disableBtns = () => {
  for(let btn of btns){
    btn.disabled = true;
  }
}

const enableBtns = () => {
  for(let btn of btns){
    btn.disabled = false;
    btn.innerText = "";
  }
  
}


const resetGame = () => {
  turnX = true;
  enableBtns();
  msgContainer.classList.add("hide");
};


newGamebtn.addEventListener('click', resetGame);
reset.addEventListener('click', resetGame);