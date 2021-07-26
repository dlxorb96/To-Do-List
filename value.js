
const $nameForm = document.querySelector('#nameForm');
const $name = document.querySelector('#name');
const $input = document.querySelector('#input');
const $toDoForm = document.querySelector('#toDoForm');
const toDoFormInput = document.querySelector('#todoForminput');
const HIDDEN = 'hidden';
const list = document.querySelector('ul');
const NAME__STRING = 'name';
const TODO_STRING = 'todo'


//html에 hidden 더하기 삭제하기 헬로우 겹치는 부분
function hiddenClass(){
    const localStorageValue = localStorage.getItem(NAME__STRING)
    $name.textContent =`Hello ${localStorageValue}!`;
    $name.classList.remove(HIDDEN);
    $toDoForm.classList.remove(HIDDEN)
    $nameForm.classList.add(HIDDEN)
}

let toDoInStorage = [];

// function deleteToDo(e){
//     console.log(e)
// }


// 이름 제출 이벤트
function submitEventHandler(event){
    event.preventDefault();
    const inputName = $input.value;
    localStorage.setItem(NAME__STRING, inputName)
    hiddenClass()
    const toDolist = toDoFormInput.value;
    toDoInStorage = toDolist
    toDoInStorage.push(toDolist)
    makingToDo()
    toDoFormInput.value = ''

}



// todo 이벤트
function makingToDo(toDolist){
    event.preventDefault();
    
    const $span = document.createElement('span');
    const $li = document.createElement('li')
    $li.textContent = toDolist
    
    localStorage.setItem(TODO_STRING, JSON.stringify(toDoInStorage))
    const $button = document.createElement('button')
    $button.textContent = '❌';
    list.appendChild($span);
    $span.appendChild($li);
    $span.appendChild($button)

}


$nameForm.addEventListener('submit', submitEventHandler)
$toDoForm.addEventListener('submit', makingToDo) 

// 버튼 x 눌렀을 때 나오는 이벤트 리스너를 만들어야 한다.



const confirmNameStorage = localStorage.getItem(NAME__STRING)
const confirmTodoStorage = localStorage.getItem(TODO_STRING)

if(confirmNameStorage !== null){
    hiddenClass()
}   

if(confirmTodoStorage !==null){
    const parsedToDos = JSON.parse(confirmTodoStorage)
    toDoInStorage = parsedToDos;
    parsedToDos.forEach(makingToDo)

}



// 1. 이벤트리스너를 만든다 클릭시 form은 사라지고
// form의 value의 값이 span의 이너텍스트가 된다

// 2. 밑에 폼이 생긴다. 

// 3 . hello 인사를 하고 싶어

// 4. 입력한 값의 밸류가 새로요소를 만든다 ul을 html
// 에 만들어 놓고 안에 있는 li는 새로 생성시킨다./

// 버튼 클릭시 사라지는 클릭이벤트를 만들고 싶어

// 4. 서버에 저장을 하고 싶어 새로고침 해도 리스트들이 사라지지 않게
// 만들자

// x눌렀을 때 리스트 사라지게 만들기