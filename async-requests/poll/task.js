let xhrGet = new XMLHttpRequest;
xhrGet.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhrGet.send();
xhrGet.onreadystatechange = function () {
    if (xhrGet.readyState === xhrGet.DONE && xhrGet.status === 200) {
        
        let data = JSON.parse(xhrGet.responseText).data;
        let poll = document.querySelector('.poll');

        poll.insertAdjacentHTML('afterbegin',
            `<div class="poll__title" id="poll__title">${data.title}</div>`
            );

        for (let i in {...data.answers}) {
            poll.insertAdjacentHTML('afterbegin',
                `<button class="poll__answer">${{...data.answers}[i]}</button>`
            );
        };

        let buttons = document.querySelectorAll('button.poll__answer');
        
        for (let i of buttons) {
            i.addEventListener('click', function() {
                alert('Спасибо, ваш голос засчитан!');
            });   
        };
    };
};