const data = localStorage.getItem('items')
const jsonData = JSON.parse(data)
const list = [];
const formulario = document.querySelector('#form1');
const ul = document.querySelector('.todo-list')

console.log(jsonData)
loadList(jsonData)
console.log(list)

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
        addNewtags(item.id,item.value)
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
        id: String(list.length),
        item: object.value,
        check:false
    };
    list.push(todo)
    const dataJson = JSON.stringify(list)
    localStorage.setItem('items',dataJson)

}

function addNewtags(id,item, check) {
    let div = criateDiv('todo', id, check)
    const li = criateli('todo-item',item);
    let i1 = criateI('fas','fa-check');
    let buttonCheck = criateButton('check-btn');
    buttonCheck.append(i1);
    criateButtoncheck(buttonCheck,div, id);
    let i2 = criateI('fas','fa-trash');
    let buttonTrash = criateButton('trash-btn');
    buttonTrash.append(i2)
    criateButtonTrash(buttonTrash,id)

    div.append(li);
    div.append(buttonCheck);
    div.append(buttonTrash);
    ul.append(div);
}

function criateli(className, item) {
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

function criateButtoncheck(button, div, id){
    button.addEventListener('click',()=>{
        if (div.classList.value !== 'todo completed'){
            list[id].check = true
            div.classList.add('completed');
            localStorage.setItem('items',JSON.stringify(list));
        }else{
            div.classList.remove(div.classList[1]);
        }
    })}

// remove tag
function criateButtonTrash(button, id){
    button.id = id;
    button.addEventListener('click',(b)=>{
        let button = b.target;
        let id = button.id
        for (const idKey in list) {
            if (id === list[idKey].id){
                let remData = list[idKey];
                console.log(remData)
                list.splice(Number(idKey),1);
                localStorage.setItem('items',JSON.stringify(list));
            }
        }
        let liRemove = document.querySelector('#div'+id);
        ul.removeChild(liRemove);

    });
}

function criateDiv(className, id, check){
    let div = document.createElement('div');
    div.id = ('div' + id)
    div.classList.add(className)
    if (check === true){
        div.classList.add('completed')
    }
    return div;
}

function loadList(jList) {
    let item;
    for (const listKey in jList) {
        item = jList[listKey];
        list.push(item)
        addNewtags(item.id, item.item, item.check)
    }
}