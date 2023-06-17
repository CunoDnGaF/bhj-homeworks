let xhrGet = new XMLHttpRequest();
let loader = document.getElementById('loader');

xhrGet.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhrGet.send();  
xhrGet.onreadystatechange = function() {
    if(xhrGet.readyState === xhrGet.DONE && xhrGet.status === 200) {
        
        let response = JSON.parse(xhrGet.responseText)['response'].Valute;
        let items = document.getElementById('items');

        for (let i in response) {
                items.insertAdjacentHTML('afterbegin', `<div class="item">
                <div class="item__code">${response[i].CharCode}</div>
                <div class="item__value">${response[i].Value}</div>
                <div class="item__currency">руб.</div>
            </div>`);
        };
       
        loader.classList.remove('loader_active');
    };
};
