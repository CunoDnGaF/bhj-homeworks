const signBtn = document.getElementById('signin__btn');
const signin = document.getElementById('signin');
const form = document.getElementById('signin__form');
const login = document.getElementsByName('login')[0];
const password = document.getElementsByName('password')[0];
const welcome = document.getElementById('welcome');


if (localStorage.getItem('user_id') != null) {
  signin.classList.remove('signin_active');
  welcome.textContent += localStorage.getItem('user_id');
  welcome.classList.add('welcome_active');
} else {
  signBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
    xhr.send(new FormData(form));
    
    xhr.addEventListener('load', function() {
        let response = JSON.parse(xhr.response);
        if (response['success'] == true) {
          signin.classList.remove('signin_active');
          welcome.textContent += response['user_id'];
          localStorage.setItem('user_id', response['user_id']);
          welcome.classList.add('welcome_active');
        } else {
          login.value = '';
          password.value = '';
          alert('Неверный логин/пароль');
        }
      
    });
  
  });
}





