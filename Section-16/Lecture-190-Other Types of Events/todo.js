var allLi = document.querySelectorAll('li');

for (let index = 0; index < allLi.length; index++) {
    allLi[index].addEventListener("mouseover", function () {
        this.classList.add("selected");
    });

    allLi[index].addEventListener("mouseout", function () {
        this.classList.remove("selected");
    });

    allLi[index].addEventListener("click", function(){
        this.classList.toggle("done");
    });
}
