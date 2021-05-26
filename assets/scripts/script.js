const inputTask = document.querySelector(".input-task"); 
const buttonTask = document.querySelector(".btn-task");
const tasks = document.querySelector(".tasks");


inputTask.setAttribute('class','input-task');

inputTask.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
    //verify the key of enter
    if (!inputTask) return; //if input is empty

    addTask(inputTask.value); //else
    cleanInput();
  }
});

buttonTask.addEventListener("click", function () {  //eventButton

  if (!inputTask.value) return;

  addTask(inputTask.value);
  cleanInput();
});

function createButtonRemove(li) {  //create the button to remove next to the tasks
  li.innerText += " ";

  const buttonRemove = document.createElement("button");
  buttonRemove.setAttribute("class", "remove");
  buttonRemove.innerText = "Remove";
  li.appendChild(buttonRemove);
}

function cleanInput() { //clean the input and add the focus
  inputTask.value = "";
  inputTask.focus();
}

function addTask(inputText) { //create 1 task
  const li = createLi();
  li.innerHTML = inputText;
  tasks.appendChild(li);
  createButtonRemove(li);
  saveTasks();
}

function createLi() { //createa 1 li
  const li = document.createElement("li");
  li.setAttribute('class','list-lis');
  return li;
}

document.addEventListener("click", function (event) {  //verify if element contains the class remove(53) and remove
  const element = event.target; 

  if (element.classList.contains("remove")) {  //(53)
    element.parentElement.remove(); //remove the element in case the tasks created
    saveTasks();
  }
});


function saveTasks(){
  const liTasks = tasks.querySelectorAll('li');
  const listTasks = [];

  for(let task of liTasks){
    let taskText = task.innerText;
    taskText = taskText.replace('Remove','').trim();
    listTasks.push(taskText);
  }

  const tasksJSON = JSON.stringify(listTasks); //create a String of listTasks converted to JSON
  localStorage.setItem('tasks', tasksJSON); //add the string up line(69) to a database in browser
  
}


function addTasksSaved(){
  const tasks = localStorage.getItem('tasks');
  const listOfTasks = JSON.parse(tasks);
  console.log(tasks);

  for(let task of listOfTasks){
    addTask(task);
  }
}

addTasksSaved();