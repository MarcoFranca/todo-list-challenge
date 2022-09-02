const userLog = window.sessionStorage.getItem('userOn')

// ******* validate **********

function validateInput(item){
    if (item.value === ''){
        alert("digitar um valor");
        return false;
    }
    return true
}

//*******criate objects of list *********


function criateObject(object) {
    let todo = {
        id: String(Math.floor(Math.random() * 1000 + 1)),
        item: object.value,
        check:false
    };

    addNewtags(todo.id, todo.item)
    list.push(todo)
    const dataJson = JSON.stringify(list)
    localStorage.setItem(userLog,dataJson)
}

//*******criate tags *********

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

function criateDiv(className, id, check){
    let div = document.createElement('div');
    div.id = ('div' + id)
    if (!check === true){
        //toglle
        div.classList.add(className)
    }else {
        div.classList.add(className)
        div.classList.add('completed')
    }
    return div;
}

//*******Buttons - Check and trash *********

function criateButton(className){
    let button = document.createElement('button');
    button.classList.add(className);
    return button;}

function criateButtoncheck(button, div, id){
    button.id = id
    button.addEventListener('click',()=>{
        list.forEach((e)=>{
            if (button.id === e.id){
                if (div.classList.value !== 'todo completed'){
                    e.check = true
                    div.classList.add('completed');
                    localStorage.setItem(userLog,JSON.stringify(list));
                }else{
                div.classList.remove(div.classList[1]);
                e.check = false
                localStorage.setItem(userLog,JSON.stringify(list));
            }}})})}

//*******remove tags*********

function criateButtonTrash(button, id){
    button.id = id;
    button.addEventListener('click',(b)=>{
        let id = b.target.id;
        for (const idKey in list) {
            if (id === list[idKey].id){
                list.splice(Number(idKey),1);
                localStorage.setItem(userLog,JSON.stringify(list));
            }}
        let liRemove = document.querySelector('#div'+id);
        ul.removeChild(liRemove);
    });
}

//*******load JSON list*********

function loadList(jList) {
    for (const listKey in jList) {
        list.push(jList[listKey])
        addNewtags(jList[listKey].id, jList[listKey].item, jList[listKey].check)
    }
}

//*******filter of tag select options*********

function filter () {
    let selection = document.querySelector('.filter-todo')
    let option = selection.options[selection.selectedIndex]
    stateOption(option.value)
}

//*******change divs according to options*********

function stateOption (option){
    let listFalse = list.filter(filterUnCheck)
    let listTrue = list.filter(filterCheck);
    let stateFalse;
    let stateTrue;

    if (option === "completed"){
        stateFalse = "none"
        stateTrue = "flex"
    }else if(option === "uncompleted"){
        stateFalse = "flex"
        stateTrue = "none"
    }else{
        stateFalse = "flex"
        stateTrue = "flex"
    }

    for (const listKey in listTrue) {
        document.querySelector('#div'+listTrue[listKey].id).style.display = stateTrue;}
    for (const listKey in listFalse) {
        document.querySelector('#div'+listFalse[listKey].id).style.display = stateFalse;}
}

function filterCheck (value){
    if (value.check){
        return value
    }}

function filterUnCheck (value){
    if (!value.check){
        return value
    }}

function userName (){
 document.querySelector('#user').textContent = userLog
}