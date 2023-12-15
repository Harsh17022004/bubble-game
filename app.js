let timer = 60;
let score = 0;
let hitrn = 0;


function incrScore() {
    score += 10;
    document.querySelector("#score").textContent = score;
}

function getHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hit").textContent = hitrn;
}

function runTimer() {
    let timerIdx = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.querySelector("#timer").textContent = timer;
        }
        else {
            clearInterval(timerIdx);
            document.querySelector(".panel_btm").innerHTML = `<h1>Game Over <br> Your score : ${score}</h1>`;
        }
    }, 1000)
}

function getBubble() {
    let clutter = "";

    for (let i = 1; i <= 147; i++) {
        let rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector(".panel_btm").innerHTML = clutter;
}
getBubble();
runTimer();
getHit();

document.querySelector(".panel_btm")
    .addEventListener("click", (dets) => {
        let clickedNum = Number(dets.target.textContent);
        if (clickedNum == hitrn) {
            incrScore();
            getBubble();
            getHit();
        }
    })

