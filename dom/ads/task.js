let rotatorCases = Array.from(document.querySelectorAll('span.rotator__case'));

function rotator() {
    for (let i = 0; i < rotatorCases.length; i++) {
        let activeCase = rotatorCases[i];
        
        if (activeCase.classList.contains('rotator__case_active')) {
            activeCase.classList.remove('rotator__case_active');
            if (i + 1 === rotatorCases.length) {
                i = 0;
                rotatorCases[i].classList.add('rotator__case_active');
            } else {
                rotatorCases[i + 1].classList.add('rotator__case_active');
                return;
            };
        };
    };
}

setInterval(rotator, 1000);