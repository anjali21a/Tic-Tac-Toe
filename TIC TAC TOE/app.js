var ShowWinPage = document.querySelector(".win-message");
var message = document.querySelector(".message");
var xCount = document.querySelector(".x-player-number-count");
var oCount = document.querySelector(".o-player-number-count");
var game = true;
var Xcounter = 0;
var Ocounter = 0;
function StartGame(element) {
  console.log(element);
  if (game) {
    element.innerHTML = "X";
    Xcounter++;
    xCount.innerHTML = `${element.innerHTML} Take Play ${Xcounter} times`;
    element.classList.add("desiable");
    game = false;
  } else {
    element.innerHTML = "O";
    Ocounter++;
    oCount.innerHTML = `${element.innerHTML} Take Play ${Ocounter} times`;
    element.classList.add("desiable");
    game = true;
  }
  CheckWin();
}

function CheckWin() {
  var cells = document.getElementsByClassName("cell");
  var winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (var i = 0; i < winningCombinations.length; i++) {
    var combination = winningCombinations[i];
    console.log(combination[0], combination[1], combination[2]);
    var cell1 = cells[combination[0]];
    // console.log(cell1);
    var cell2 = cells[combination[1]];
    // console.log(cell2);
    var cell3 = cells[combination[2]];
    // console.log(cell3);
    if (
      cell1.innerHTML === cell2.innerHTML &&
      cell2.innerHTML === cell3.innerHTML &&
      cell1.innerHTML !== ""
    ) {
      //   alert("Player " + cell1.innerHTML + " wins!");
      ShowWinPage.classList.replace("d-none", "d-flex");
      message.innerHTML = `Congratulations ${cell1.innerHTML} wins the Game!`;
      game = false;
      scrollToTop();
      return;
    }
  }
}

function ResetGame() {
  var cell = document.getElementsByClassName("cell");
  for (var i = 0; i < cell.length; i++) {
    cell[i].innerHTML = "";
    cell[i].classList.remove("desiable");
    game = true;
  }
  ShowWinPage.classList.replace("d-flex", "d-none");
  message.innerHTML = "";
  Xcounter = 0;
  Ocounter = 0;
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
