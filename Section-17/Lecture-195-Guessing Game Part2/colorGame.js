var numSquares = 6;
var colors = generateRandomColors(numSquares)
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay")
var gameOver = false;
var selectedColor = "";
var messageDisplay = document.getElementById("message");
var heading = document.getElementById('heading');
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init()

function init() {
    setupModeButtons();
    setupSquares();
}


function reset() {
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    messageDisplay.textContent = '';
    heading.style.background = "steelblue";
    for (var index = 0; index < squares.length; index++) {
        if (colors[index]) {
            squares[index].style.display = "block";
            squares[index].style.backgroundColor = colors[index]
        } else {
            squares[index].style.display = "none";
        }
    }
    colorDisplay.textContent = pickedColor.toUpperCase();
    resetButton.textContent = "New Colors"
}

function setupSquares() {
    for (var index = 0; index < squares.length; index++) {
        squares[index].style.backgroundColor = colors[index]

        squares[index].addEventListener("click", function () {
            selectedColor = this.style.backgroundColor;
            if (selectedColor === pickedColor) {
                messageDisplay.textContent = "Correct!";
                changeColor(pickedColor);
                heading.style.backgroundColor = pickedColor;
                resetButton.textContent = "Play Again ?"
            } else {
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again!";
            }
        });
    };
    reset();
}

function setupModeButtons() {
    for (let index = 0; index < modeButtons.length; index++) {
        modeButtons[index].addEventListener("click", function () {
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        });
    }
}


// Reset the Game
resetButton.addEventListener("click", function () {
    reset();
})

// Generate Random Colors
function generateRandomColors(num) {
    var arr = [];
    for (let index = 0; index < num; index++) {
        var rgColor = "rgb(" + Math.floor(Math.random() * Math.floor(256)) + ", " 
        + Math.floor(Math.random() * Math.floor(256)) + ", " + Math.floor(Math.random() * Math.floor(256)) + ")";
        arr.push(rgColor);
    }
    return arr;
}

// Pick Random Color
function pickColor() {
    var pickedColor = ''
    pickedColor = colors[Math.floor(Math.random() * colors.length)];
    return pickedColor
}

colorDisplay.textContent = pickedColor.toUpperCase();

// Change color of all squares
function changeColor(color) {
    for (var index = 0; index < squares.length; index++) {
        squares[index].style.backgroundColor = color;
    }
}


