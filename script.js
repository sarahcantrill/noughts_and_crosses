const board = document.getElementById("board")
const resetButton = document.getElementById("reset-btn")

let currentPlayer = "X"
let gameBoard = ["", "", "", "", "", "", "", "", ""]
let gameActive = true

function clickSquare(event) {
    clickedSquare = clickedSquareEvent.target
}