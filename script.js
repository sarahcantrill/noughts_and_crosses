document.addEventListener('DOMContentLoaded', () => {
const board = document.getElementById("board");
const resetButton = document.getElementById("reset-btn");

const statusDisplay = document.getElementById("status");

let currentPlayer = "X";
let gameBoard = ["", "", "", "", "", "", "", "", ""];
let gameActive = true;
let scores = { X: 0, O: 0};

//winning positions
const winningPositions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]



//clicking event 
function clickSquare(event) {
    let clickedSquare = event.target //or event.target
    // //const index = event.target.dataset.index;
    const clickedSquareIndex = Number.parseInt(clickedSquare.getAttribute("data-index"))

    //check if the square has already been chosen
    if (gameBoard[clickedSquareIndex] !== "" || !gameActive){
        return; 
    }

    //update square w players symbol
    gameBoard[clickedSquareIndex] = currentPlayer
    clickedSquare.textContent = currentPlayer
    clickedSquare.setAttribute("aria-label", `Cell ${clickedSquareIndex + 1}, ${currentPlayer}`);

    checkResult()

    //switch players
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    updateStatus();
}

function updateScore(winner) {
    scores[winner]++;
    document.getElementById("scoreX").textContent = `Player X Wins:${scores.X}`;
    document.getElementById("scoreO").textContent = `Player O Wins:${scores.O}`;
}

// check if the game state is a win or a draw
function checkResult() {
    for (let i = 0; i < winningPositions.length; i++) {
        const [a, b, c] = winningPositions[i];

        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c] ) {
            gameActive = false; //if there is a player in winning position then the game stops 
         //   document.getElementById("message").textContent = `${gameBoard[a]} wins`;
            document.querySelectorAll(".square")[a].classList.add("winning-square");
            document.querySelectorAll(".square")[b].classList.add("winning-square");
            document.querySelectorAll(".square")[c].classList.add("winning-square");
            statusDisplay.textContent = `Player ${gameBoard[a]} wins!`;
            updateScore(gameBoard[a])
            return;
        }
    }

    //once there is no squares left stop the game
    if(!gameBoard.includes("")) {
        gameActive = false;
      //  document.getElementById("message").textContent = "its a draw";
        statusDisplay.textContent = "It's a draw!";
    }

   // status.textContent = 'Player ${currentPlayer} Turn'
}

//call the clicking of the squares
document.querySelectorAll(".square").forEach(square => {
    square.addEventListener("click", clickSquare);
})

function updateStatus() {
    if (gameActive) {
      statusDisplay.textContent = `Player ${currentPlayer}'s turn`
    }
  }

//reset button
resetButton.addEventListener("click", () => {
    currentPlayer = "X"
    gameBoard = ["", "", "", "", "", "", "", "", ""]
    gameActive = true

    document.querySelectorAll(".square").forEach(square => {
        square.textContent = "";
        square.setAttribute("aria-label", "Empty Square");
        square.classList.remove("winning-square");
    });

    statusDisplay.textContent = `Player ${currentPlayer}'s turn`
})

updateStatus();

});

