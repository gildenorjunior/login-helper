const eye = document.querySelector('#eye');
const eyeSlash = document.querySelector('#eye-slash');
const input = document.querySelector('#password')

function revelarSenha(){
    if(input.getAttribute('type') === 'password') {
        input.setAttribute('type', 'text')
        eye.style.display = 'block'
        eyeSlash.style.display = 'none'
    } else {
        input.setAttribute('type', 'password')
        eye.style.display = 'none';
        eyeSlash.style.display = 'block';
    }
}

eye.addEventListener('click', revelarSenha)
eyeSlash.addEventListener('click', revelarSenha);






