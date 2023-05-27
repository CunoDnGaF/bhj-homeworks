let clickerCounter = document.getElementById('clicker__counter'); 
let cookie = document.getElementById('cookie');

cookie.onclick = function() {
    clickerCounter.textContent ++;
    if (clickerCounter.textContent % 2) {
        cookie.width = 250;
    } else {
        cookie.width = 200;
    }
}

