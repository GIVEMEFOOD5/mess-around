const links = [
    "snake.html",
    "mousepage.html",
    "starWars.html",
    "beans.html",
    "index.html",
    "startFlashingNoWarn()"
]

function getRandom() {
    let randomNumber = Math.floor(Math.random() * links.length);

    if (!links[randomNumber].includes("(")) {
        location.href = links[randomNumber];
    }

    else {
        eval(links[randomNumber]);
    }
}