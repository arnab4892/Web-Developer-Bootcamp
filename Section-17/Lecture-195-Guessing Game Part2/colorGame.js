var colors = [];
var squares = document.querySelectorAll(".square");
var pickedColor = "";
var colorDisplay = document.getElementById("colorDisplay")
var gameOver = false;
var selectedColor = "";
var messageDisplay = document.getElementById("message");

// Generate Random Colors
function generateRandomColors() {
    var rgColor = "rgb(" + Math.floor(Math.random() * Math.floor(255)) + ", " + Math.floor(Math.random() * Math.floor(255)) + ", " + Math.floor(Math.random() * Math.floor(255)) + ")";
    return rgColor;
}


// Populating colors 
for (let index = 0; index < 6; index++) {
    colors.push(generateRandomColors())
};

pickedColor = colors[Math.floor(Math.random() * colors.length)];
colorDisplay.textContent = pickedColor.toUpperCase();

function changeColor(color) {
    for (let index = 0; index < colors.length; index++) {
        colors[index].style.backgroundColor = color;
    }
}


for (let index = 0; index < squares.length; index++) {
    squares[index].style.backgroundColor = colors[index]

    squares[index].addEventListener("click", function () {
        selectedColor = this.style.backgroundColor;
        if (selectedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            changeColor(pickedColor);
            // gameOver = true;
        } else {
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!";
        }
    })
};