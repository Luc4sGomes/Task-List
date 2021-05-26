const inputTask = document.querySelector(".input-task");
const buttonTask = document.querySelector(".btn-task");
const tasks = document.querySelector(".tasks");

inputTask.addEventListener("keypress", function (event) {
  if (event.keyCode === 13) {
    //verify the key of enter
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

function createButtonRemove(li) {
  li.innerText += " ";

  const buttonRemove = document.createElement("button");
  buttonRemove.setAttribute("class", "remove");
  buttonRemove.innerText = "Remove";
  li.appendChild(buttonRemove);
}

function cleanInput() {
  inputTask.value = "";
  inputTask.focus();
}

function addTask(inputText) {
  const li = createLi();
  li.innerHTML = inputText;
  tasks.appendChild(li);
  createButtonRemove(li);
  saveTasks();
}

function createLi() {
  const li = document.createElement("li");
  return li;
}

document.addEventListener("click", function (event) {
  const element = event.target;

  if (element.classList.contains("remove")) {
    element.parentElement.remove();
  }
});


function saveTasks(){

}