let list = [];
const formulario = document.querySelector('#form1');
const ul = document.querySelector('.todo-list')

formulario.addEventListener('submit',(event)=>{
    event.preventDefault()

    // capturar o elemento
    let item = formulario.querySelector('.todo-input');

    // validar o campo

    if (item.value === ''){
        alert("digitar um valor");
    } else{

        // cria objeto e envia para lista
        let todo = {
            id:list.length +1,
            item: item.value,
            finished:false
        };

        list.push(todo)
        console.log(list)

        // criar o html da lista

        let li = document.createElement('li');
            li.classList.add('todo-item');
            li.innerHTML = todo.item;
        let i1 = document.createElement('i');
        i1.classList.add('fas')
        i1.classList.add('fa-check')

        let button1 = document.createElement('button');
        button1.classList.add('check-btn');
            button1.append(i1);
            button1.addEventListener('click',()=>{
                if (div.classList.value !== 'todo completed'){
                div.classList.add('completed')
                }else{
                    div.classList.remove(div.classList[1])
                }
            })
        let i2 = document.createElement('i');
        i2.setAttribute('class', 'fas')
        i2.classList.add('fa-trash')

        let button2 = document.createElement('button');
        button2.classList.add('trash-btn');
        button2.id = list.length;
            button2.append(i2);
        let div = document.createElement('div');
        div.classList.add('todo')

        div.append(li);
        div.append(button1);
        div.append(button2);
        ul.append(div);
        console.log(ul)
    }

    })
