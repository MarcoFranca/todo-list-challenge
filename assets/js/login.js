const login = 'admin';
const senha = '12345';

const form = document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const inputLogin = form.querySelector('#login')
    const inputPasswd = form.querySelector('#password')

    if (login === inputLogin.value && senha === inputPasswd.value){

        window.sessionStorage.setItem('logado', 'true');
        window.location = 'index.html'

    }else {
        window.sessionStorage.setItem('logado', 'false');
        console.error('senha ou login invalido')
        alert('senha ou login invalido')
    }

})