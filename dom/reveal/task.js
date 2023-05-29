let reveal = document.getElementsByClassName('reveal');

let isVisible = function(el) {
    let elTop = el.getBoundingClientRect().top;

    if (elTop > 0 && elTop < window.innerHeight) {
        return true;
    } else {
        return false;
    };
};

window.addEventListener('scroll', function () {
    for (let i = 0; i < reveal.length; i++) {
        if ( isVisible(reveal[i]) === true) {
            reveal[i].classList.add('reveal_active');
            console.log(true);
        } else {
            reveal[i].classList.remove('reveal_active');
            console.log(false);
        };
    };
});