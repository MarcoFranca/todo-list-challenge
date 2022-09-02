const dataLogin = localStorage.getItem('users')
const openModal = document.querySelector('#openModal')
const closeModal = document.querySelector('#closeModal')
const fade = document.querySelector('#fade')
const newLogin = document.querySelector('#crtLog')
const newPass = document.querySelector('#crtPass')

const jsonUsers = JSON.parse(dataLogin)

const users = []

let validate = false;

getJson()

const form = document.querySelector('#form2')
form.addEventListener('submit',(event)=>{
    event.preventDefault()
    const inputLogin = form.querySelector('#login')
    const inputPasswd = form.querySelector('#password')

    validateLogin(inputLogin.value, inputPasswd.value)

    if (validate){
        window.sessionStorage.setItem('logado', 'true');
        window.location = 'index.html'
        window.sessionStorage.setItem('userOn', inputLogin.value)

    }else {
        window.sessionStorage.setItem('logado', 'false');
        inputLogin.value = ''
        inputPasswd.value = ''
        console.error('senha ou login invalido')
        alert('senha ou login invalido')
    }
})


//******* modal criate acount *********


const modal = [openModal, fade]
    modal.forEach((event)=>{
    event.addEventListener('click', toggleModal)
})

function toggleModal (){
        document.querySelector('#fade').classList.toggle('hide')
        document.querySelector('#modal').classList.toggle('hide')
}

closeModal.addEventListener('click',(event) =>{
    event.preventDefault()
        let userCa = true
            users.forEach((user)=>{
            if (user.login === newLogin.value){
                alert('usuario existente, tente outro')
                console.error('usuario existente')
                userCa = false
            }})

    if (userCa === true && newLogin.value.length >= 3 &&
        newPass.value.length >= 5){
        createAcoint(newLogin.value, newPass.value)
        console.log('sucesso')
        alert('conta criada com sucesso')
        toggleModal()
    }else if (userCa !== false){
        alert('digite um login e uma senha com mais de 5 caracteres')
        console.error('compo não pode ser vazio')
    }
})

function createAcoint(login, senha){
    const user = {
        login: login,
        senha: senha
    }
    users.push(user)
    localStorage.setItem('users',JSON.stringify(users))
}

function getJson() {
    if (jsonUsers !== null) {
        jsonUsers.forEach((e) => {
            users.push(e)
        })
    }
}

function validateLogin (login, password){
    users.forEach((e)=>{
        console.log(e.login)
        if (e.login === login && e.senha === password) {
            validate = true
            console.log('foi' + validate)
        }
    })
}