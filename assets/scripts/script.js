const inputTask = document.querySelector(".input-task"); 
const buttonTask = document.querySelector(".btn-task");
const tasks = document.querySelector(".tasks");

inputTask.addEventListener("keypress", function (event) { 
  if (event.keyCode === 13) { //verify the key of enter
    if (!inputTask) return; //if is empty

    addTask(inputTask.value); //else 
    cleanInput();
  }
});

buttonTask.addEventListener("click", function () {
  //eventButton

  if (!inputTask.value) return;

  addTask(inputTask.value);
  cleanInput();
});

function cleanInput() {
  inputTask.value = "";
  inputTask.focus();
}

function addTask(inputText) { 
  const li = createLi();
  li.innerHTML = inputText;
  tasks.appendChild(li);
}

function createLi() {
  const li = document.createElement("li");
  return li;
}
