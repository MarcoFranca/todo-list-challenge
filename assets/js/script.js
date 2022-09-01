const logado = window.sessionStorage.getItem('logado')
const data = localStorage.getItem('items')
const jsonData = JSON.parse(data)
const list = [];
const form = document.querySelector('#form1');
const ul = document.querySelector('.todo-list')



//*******formulary submit *********
console.log(logado)
if (JSON.parse(logado) === true){
    loadList(jsonData)
form.addEventListener('submit',(event)=>{
    event.preventDefault()

    // capturar o elemento
    let item = form.querySelector('.todo-input');

    // validar o campo

    let validate = validateInput(item);
    // cria objeto e envia para lista
    if (validate){
        criateObject(item);
        // criar o html da lista
        addNewtags((list.length -1), item.value)
    }
});

//*******option selection event for display change*********
document.addEventListener("change", ()=>{
    filter()
} )
}else {
    window.location = 'e.html'
}