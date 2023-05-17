const body = document.getElementsByTagName("body")[0];
const main = document.getElementsByTagName("main")[0];
const user = document.getElementsByClassName("user-info")[0];
const button = document.getElementById("button");
const buttonClose = document.getElementById("buttonClose");

buttonClose.style.display = "none";

button.addEventListener("click", e => {
    button.style.display = "none";
    buttonClose.style.display = "flex";
    if (window.innerWidth < 850) {
        user.style.display = "none";
    }
})

buttonClose.addEventListener("click", e => {
        user.style.display = "flex";
        button.style.display = "flex";
        buttonClose.style.display = "none";
    }
)
