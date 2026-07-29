window.addEventListener("scroll", function(){

    let spiderman = document.querySelector(".spiderman");

    let scroll = window.scrollY;

    spiderman.style.transform =
    "rotate(" + (scroll * 0.02) + "deg)";

});
const message = document.querySelector(".spidey-message");

const text = "Hey! Welcome to Vedang's Portfolio 🕷️";

let index = 0;

message.innerHTML = "";


function typeMessage(){

    if(index < text.length){

        message.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeMessage,80);

    }

}


typeMessage();