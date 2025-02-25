const board = document.getElementById("board")
const resetButton = document.getElementById("reset-btn")

let currentPlayer = "X"
let gameBoard = ["", "", "", "", "", "", "", "", ""]
let gameActive = true

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

function clickSquare(event) {
    clickedSquare = clickedSquareEvent.target //or event.target
    // //const index = event.target.dataset.index;
    const clickedSquareIndex = Number.parseInt(clickedSquare.getAttribute("data-index"))

    if (gameBoard[clickedSquareIndex] !== "" || !gameActive){
        return; 
    }

    gameBoard[clickedSquareIndex] = currentPlayer
    clickedSquare.textContent = currentPlayer
    clickedSquare.setAttribute("aria-label", `Cell ${clickedSquareIndex + 1}, ${currentPlayer}`);

    checkResult()

    currentPlayer = currentPlayer === "X" ? "O" : "X";
}

function checkResult() {
    for (let i = 0; i < winningPositions.length; i++) {
        const [a, b, c] = winningPositions[i];

        if (gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c] ) {
            gameActive = false;
            document.getElementById("message").textContent = `${gameBoard[a]} wins`;
            return;
        }
    }

    if(!gameBoard.includes("")) {
        gameActive = false;
        document.getElementById("message").textContent = "its a draw";
    }
}