const data = localStorage.getItem('items')
const list = JSON.parse(data);
// localStorage.clear()
console.log(list)

const formulario = document.querySelector('#form1');
const ul = document.querySelector('.todo-list')



loadList(list)

formulario.addEventListener('submit',(event)=>{
    event.preventDefault()

    // capturar o elemento
    let item = formulario.querySelector('.todo-input');

    // validar o campo

    let validate = validateInput(item);

    // cria objeto e envia para lista
    if (validate){
        criateObject(item);
        // criar o html da lista
        addNewtags(item.value)
    }
});

// *******funções**********

function validateInput(item){
    if (item.value === ''){
        alert("digitar um valor");
        return false;
    }
    return true
}

function criateObject(object) {
    let todo = {
        id: String(list.length +1),
        item: object.value,
    };
    list.push(todo)
    const dataJson = JSON.stringify(list)
    localStorage.setItem('items',dataJson)

}

function addNewtags(item) {
    console.log(item)
    let div = criateDiv('todo')
    const li = criateli('todo-item',item);
    let i1 = criateI('fas','fa-check');
    let buttonCheck = criateButton('check-btn');
    buttonCheck.append(i1);
    criateButtoncheck(buttonCheck,div);
    let i2 = criateI('fas','fa-trash');
    let buttonTrash = criateButton('trash-btn');
    buttonTrash.append(i2)
    criateButtonTrash(buttonTrash)

    div.append(li);
    div.append(buttonCheck);
    div.append(buttonTrash);
    ul.append(div);
}

function criateli(className, item) {
    console.log(item)
    let li = document.createElement('li');
    li.classList.add(className);
    li.innerHTML = item;
    return li;}

function criateI(className1, className2) {
    let i = document.createElement('i');
    i.classList.add(className1);
    i.classList.add(className2);
    return i;}

function criateButton(className){
    let button = document.createElement('button');
    button.classList.add(className);
    return button;}

function criateButtoncheck(button, div){
    button.addEventListener('click',()=>{
        if (div.classList.value !== 'todo completed'){
            div.classList.add('completed');
        }else{
            div.classList.remove(div.classList[1]);
        }
    })}

function criateButtonTrash(button){
    button.id = String(list.length);
    button.addEventListener('click',(b)=>{
        let button = b.target;
        let id = button.id
        for (const idKey in list) {
            if (id === list[idKey].id){
                list.splice(Number(idKey),1);
                const dataJson = JSON.stringify(list)
                localStorage.setItem('items',dataJson)
            }
        }
        let liRemove = document.querySelector('#div'+id);
        ul.removeChild(liRemove);

    });
}

function criateDiv(className){
    let div = document.createElement('div');
    div.id = 'div' + list.length
    div.classList.add(className)
    return div;
}

function loadList(list) {
    let item;
    for (const listKey in list) {
        item = list[listKey];
    console.log(item.item)
        addNewtags(item.item)
    }
}