let getHole = index => document.getElementById(`hole${index}`);
let deadMole = document.getElementById('dead');
let lostMole = document.getElementById('lost');
let winPoints = 0;
let lostPoints = 0;

function checkGame(deadMole, lostMole) {
    if (deadMole === 10) {
        alert("Вы победили!");
        location.reload();
    } else if (lostMole === 5) {
        alert("Вы приграли!");
        location.reload();
    };
};

for (let i = 1; i <= 9; i++) {
    getHole(i).onclick = function () {
        if (this.className.includes('hole_has-mole')) {
            deadMole.textContent ++;
            winPoints ++;
        } else {
            lostMole.textContent ++;
            lostPoints ++;

        };
        checkGame(winPoints, lostPoints);
    };
};