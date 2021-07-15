const toDoForm = document.querySelector('#toDoForm');
const toDoInput = toDoForm.querySelector('input');
const toDoList = document.querySelector('#todo-list');

const TODO_STRING = 'toDo'

let storageList = [];



function deleteList(event){
    //리스트 삭제
    const li = event.target.parentElement;
    li.remove();
    storageList = storageList.filter((Dtodo) => Dtodo.id !== parseInt(li.id))
    localStorage.setItem(TODO_STRING, JSON.stringify(storageList))

}

function addList(newToDo){
    //html에 li, span, button 생성, 클릭이벤트생성
    const li = document.createElement('li');
    li.id = newToDo.id
    const span = document.createElement('span');
    span.innerText = newToDo.text
    const button = document.createElement('button')
    button.innerText = '❌';
    button.addEventListener('click', deleteList);
    li.appendChild(span);
    toDoList.appendChild(li);
    li.appendChild(button);
}

function toDoHandler(event) {
    //이벤트리스너 생성, 오브젝트로 넣기
    event.preventDefault();
    const toDoInputValue = toDoInput.value;
    toDoInput.value ='';
    const newTodoObj = {
        text: toDoInputValue,
        id: Date.now(),
    };
    storageList.push(newTodoObj);
    localStorage.setItem(TODO_STRING, JSON.stringify(storageList))
    addList(newTodoObj);
    
}

const savedList = localStorage.getItem(TODO_STRING) 


if(savedList !== null){
    const parsedToDos = JSON.parse(savedList);
    storageList = parsedToDos
    parsedToDos.forEach(addList)
}


// if(savedList !== null){
//     storageList = JSON.parse(savedList);
//     storageList.forEach(addList)
// }


toDoForm.addEventListener('submit', toDoHandler)
