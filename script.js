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
    [6, 7, 8],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
    
]

function clickSquare(event) {
    clickedSquare = clickedSquareEvent.target
}