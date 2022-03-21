var buttonE1 = document.querySelector("#save-task");
var tasksToDoEl = document.querySelector("#task-to-do");
var formEl = document.querySelector("#task-form");

var createTaskHandler = function() {

    event.preventDefault();

    var taskItemEl = document.createElement("li");
    taskItemEl.className = "task-item";
    taskItemEl.textContent = "This is a new task.";
    tasksToDoEl.appendChild(taskItemEl);    
}

formE1.addEventListener("submit", createTaskHandler);