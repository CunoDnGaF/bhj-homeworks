let timer = document.getElementById('timer');

let countDown = function() {
    timer.textContent --;
    
    if (timer.textContent === '0') {
        clearInterval(counter);
        alert('Вы победили в конкурсе!');
    }
};

let counter = setInterval(countDown,1000);

