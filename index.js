console.log("Welcome to Tic-Tac-Toe")
let turn = "X"
let gameover = false;
// Function to change turn
const changeTurn = () => {
  return turn === "X"?"0": "X"
}

// Function to check to win
const checkWin = () => {
  let boxtext =document.getElementsByClassName("boxtext");
  let wins = [
    [0,1,2],
    [3,4,5],
    [0,3,6],
    [1,4,7],
    [6,7,8],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ]
  wins.forEach(e => {
    if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
      document.querySelector(".info").innerText = boxtext[e[0]].innerText + "Won"
      gameover = true
    }
  })
}


let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
  let boxtext=element.querySelector(".boxtext");
  element.addEventListener('click', () =>{
    if(boxtext.innerText === '') {
      boxtext.innerText=turn;
      turn=changeTurn();
      checkWin();
      if(!gameover) {
        document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
      }
    }
  })
})

function restart(){
  document.getElementById("1").innerHTML="";
  document.getElementById("2").innerHTML="";
  document.getElementById("3").innerHTML="";
  document.getElementById("4").innerHTML="";
  document.getElementById("5").innerHTML="";
  document.getElementById("6").innerHTML="";
  document.getElementById("7").innerHTML="";
  document.getElementById("8").innerHTML="";
  document.getElementById("9").innerHTML="";
}
