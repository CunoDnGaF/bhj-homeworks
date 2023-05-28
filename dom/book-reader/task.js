let fontSize = document.getElementsByClassName('font-size');
let book = document.getElementById('book');

for (let i = 0; i < fontSize.length; i++) {
    fontSize[i].addEventListener('click', function(event) {
          
        for (let j = 0; j < fontSize.length; j++) {
            if (fontSize[j].classList.contains('font-size_active')) {
                fontSize[j].classList.remove('font-size_active');
            }
        };

        fontSize[i].classList.add('font-size_active');

        if (fontSize[i].classList.contains('font-size_active') && fontSize[i].dataset.size === "small") {
            book.classList.remove('book_fs-big');
            book.classList.add('book_fs-small');
        } else if (fontSize[i].classList.contains('font-size_active') && fontSize[i].dataset.size === "big") {
            book.classList.remove('book_fs-small');
            book.classList.add('book_fs-big');
        } else {
            book.classList.remove('book_fs-small');
            book.classList.remove('book_fs-big');
        };

        event.preventDefault(); 
    });
}