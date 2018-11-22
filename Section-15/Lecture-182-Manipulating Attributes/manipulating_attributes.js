console.log("CONNECTED!!!");

var link = document.querySelector("a");
link.getAttribute("href");

// Change href attribute
link.textContent = "LINK TO BING!!"
link.setAttribute("href", "https://www.bing.com");


// To chage the image source
var image = document.querySelector("img");
image.setAttribute("src", "apple-logo.jpg");