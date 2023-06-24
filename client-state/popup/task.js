const subscribeModal = document.getElementById('subscribe-modal');
const modalClose = document.querySelector('.modal__close');

modalClose.addEventListener('click', function() {
    subscribeModal.classList.remove('modal_active');
    setCookie('popupshown', 'true');
});

if (getCookie('popupshown') !== 'true') {
    subscribeModal.classList.add('modal_active');
} else {
    subscribeModal.classList.remove('modal_active');
}

function setCookie(name, value) {
    document.cookie = name + '=' + encodeURIComponent(value);
}
function getCookie(name) {
    const pairs = document.cookie.split('; ');
    const cookie = pairs.find(p => p.startsWith(name + '='));
    return cookie.substring(name.length + 1);
}




