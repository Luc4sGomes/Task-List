const inputTask = document.querySelector('.input-task');
const buttonTask = document.querySelector('.btn-task');
const tasks = document.querySelector('tasks');


buttonTask.addEventListener('click',function(){
  if(!inputTask.value) return;
  createTask(inputTask.value);
});

function createTask(textInput){
  const li = createLi();

}

function createLi(){  
  const li = document.createElement('li');
  return li;
}
