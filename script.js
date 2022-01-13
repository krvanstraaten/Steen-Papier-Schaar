var arr = [" "];
var a;
var lengthArray;

function ready() {
    document.querySelector("#answer").style.display = "none";
    document.querySelector("#text").innerText = "Ready to play rock paper scissors?";
    let button = document.createElement("BUTTON");
    let div = document.querySelector("#other");
    button.innerHTML = "FIGHT ME";
    div.appendChild(button);
    button.onclick = function () {
        setup();
    };
}

function setup() {
    let x = document.querySelector("#other");
    x.removeChild(x.childNodes[0]);
    document.querySelector("#answer").style.display = "block";

    let rockButton = document.querySelector("#rock");
    rockButton.onclick = function () {
        answerF(p, a);
    };

    let paperButton = document.querySelector("#paper");
    paperButton.onclick = function () {
        answerF(p, a);
    };

    let scissorsButton = document.querySelector("#scissors");
    scissorsButton.onclick = function () {
        answerF(p, a);
    };

    player1();
}

function player1() {
    document.querySelector("#text").innerText = "Player 1! Chooce your weapon!";
    return p

}

function theTitle() {
    if (arr.length == 1) {
        document.querySelector("#text").innerText = "Player 1! Chooce your weapon!";
    } else if (arr.length == 2) {
        document.querySelector("#text").innerText = "Player 2! Chooce your weapon!";
        theButtons();
    } else if (arr.length == 3) {
        document.querySelector("#answer").style.display = "none";
        winner();
    }
}

function theButtons() {
    let rockButton = document.querySelector("#rock");
    rockButton.onclick = function () {
        a = "rock";
        arr.push(a);
        theTitle();
    };

    let paperButton = document.querySelector("#paper");
    paperButton.onclick = function () {
        a = "paper";
        arr.push(a);
        theTitle();
    };

    let scissorsButton = document.querySelector("#scissors");
    scissorsButton.onclick = function () {
        a = "scissors";
        arr.push(a);
        theTitle();
    };
}

function winner() {
    const rock = "rock";
    const paper = "paper";
    const scissors = "scissors";
    let player;
    let p1 = arr[1];
    let p2 = arr[2];

    switch (p1) {
        case rock:
            switch (p2) {
                case paper:
                    text(player = "Player 2");
                    break;
                case scissors:
                    text(player = "Player 1");
                    break;
                case rock:
                    text();
                    break;
            }
            break;
        case paper:
            switch (p2) {
                case paper:
                    text();
                    break;
                case scissors:
                    text(player = "Player 2");
                    break;
                case rock:
                    text(player = "Player 1");
                    break;
            }
            break;
        case scissors:
            switch (p2) {
                case paper:
                    text(player = "Player 1");
                    break;
                case scissors:
                    text();
                    break;
                case rock:
                    text(player = "Player 2");
                    break;
            }
            break;
    }
}

function text(player) {
    let newText = document.querySelector("#text");
    let Congrat = "Congratulations!\n";
    let victor = " is victories!";

    if (player) {
        newText.innerText = Congrat + player + victor;
    } else {
        newText.innerText = "It is a draw!\nTry again";
    }

    let button = document.createElement("BUTTON");
    let div = document.querySelector("#other");
    button.innerHTML = "TRY AGAIN";
    div.appendChild(button);
    button.onclick = function () {
        arr.pop();
        arr.pop();
        setup();
    };
}