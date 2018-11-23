console.log('CONNECTED!!!');

var h1 = document.querySelector("h1")
var lis = document.querySelectorAll("li")

h1.addEventListener("click", function(){
    h1.style.color = "red";
})

for (let index = 0; index < lis.length; index++) {
    lis[index].addEventListener("click", function(){
        this.style.color = "pink";
    })
}
