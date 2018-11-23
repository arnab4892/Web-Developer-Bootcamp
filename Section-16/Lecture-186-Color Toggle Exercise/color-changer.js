console.log('CONNECTED!!!');

var button = document.querySelector("button");
var isColored = false;


// Method-1
// button.addEventListener("click", function() {
//     if (isColored) {
//         document.body.style.backgroundColor = "white";
//         isColored = false;
//     }else{
//         document.querySelector("body").style.backgroundColor = "purple";
//         isColored = true;
//     }
// })


// Method-2
// button.addEventListener("click", function() {
//     if (isColored) {
//         document.body.style.background = "white";
//     }
//     else{
//         document.body.style.background = "purple";
//     }
//     isColored = !isColored;
// })


// Method-3
button.addEventListener("click", function(){
    document.body.classList.toggle("purple");
})