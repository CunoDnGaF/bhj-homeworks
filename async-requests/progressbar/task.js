let progress = document.getElementById('progress');
let sendBtn = document.getElementById('send');
let formData = new FormData(form);
let xhr = new XMLHttpRequest();

sendBtn.addEventListener('click', function(e) {
    
    e.preventDefault();
    
    xhr.open('POST', form.action);
    xhr.upload.onprogress = function(e) {
    
        let loadProgress = e.loaded / e.total;
        progress.value = loadProgress;
        console.log(progress.value);
    }
    
    xhr.send(formData);
    
    
});