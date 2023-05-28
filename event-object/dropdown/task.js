let dropdownBtn = document.querySelector('div.dropdown__value');
let dropdownList = document.querySelector('ul.dropdown__list');
let menuList = Array.from(document.querySelectorAll('a.dropdown__link'));

menuOpen = function() {
    if (dropdownList.classList.contains('dropdown__list_active')) {
        dropdownList.classList.remove('dropdown__list_active');
    } else {
        dropdownList.classList.add('dropdown__list_active');
    }
    
};

dropdownBtn.addEventListener('click', menuOpen);

menuList.forEach(function (e) {
    e.onclick = function () {
        dropdownBtn.textContent = e.textContent;
        return false;
    };
    e.addEventListener('click', menuOpen);
});