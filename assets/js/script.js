const logado = window.sessionStorage.getItem('logado')

const data = localStorage.getItem('items')
const jsonData = JSON.parse(data)

const list = [];
const form1 = document.querySelector('#form1');
const ul = document.querySelector('.todo-list')


//******* formulary submit *********

console.log(logado)
if (JSON.parse(logado) === true){
    loadList(jsonData)

form1.addEventListener('submit',(event)=>{
    event.preventDefault()

    // capturar o elemento
    let item = form1.querySelector('.todo-input');

    // validar o campo

    let validate = validateInput(item);

    // cria objeto e envia para lista

    if (validate){
        // criar o html da lista
        criateObject(item);
        item.value = ''
    }
});

//******* option selection event for display change *********

document.addEventListener("change", ()=>{
    filter()
} )
}else {
    window.location = 'login.html'
}



