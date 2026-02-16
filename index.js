// one listener on ENTER and one listener on Click.
// so that the app works on mobile screens too.

/* document.addEventListener("keypress", function (e) {
    if(e.key === "Enter") {
        
        window.location.href = "game.html";
    }
})
document.addEventListener("click", function (e) {
    window.location.href = "game.html";
}) */

const form = document.querySelector(".input-form");


form.addEventListener("submit", function (e) {
    e.preventDefault();
    const userInput = document.getElementById("name");
    const playerInput = userInput.value;

    localStorage.setItem("playername", playerInput);

    window.location.href = "game.html";

})
