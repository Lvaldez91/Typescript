// clase
var TodoItem = /** @class */ (function () {
    function TodoItem(task, isCompleted) {
        this.task = task;
        this.isCompleted = isCompleted;
    }
    return TodoItem;
}());
// Administrador de las tareas
var TaskManager = /** @class */ (function () {
    function TaskManager() {
        this.tasks = [];
    }
    TaskManager.prototype.addTask = function (task) {
        var newItem = new TodoItem(task, false);
        this.tasks.push(newItem);
    };
    return TaskManager;
}());
var HTMLHelper = /** @class */ (function () {
    function HTMLHelper() {
    }
    HTMLHelper.createTaskItem = function (task) {
        var listItem = document.createElement('li');
        var checkBox = document.createElement('input');
        checkBox.addEventListener('change', function () {
            if (checkBox.checked) {
                task.isCompleted = true;
                displayTask();
            }
        });
        var label = document.createElement('label');
        checkBox.type = 'checkbox';
        label.innerText = task.task;
        listItem.appendChild(checkBox);
        listItem.appendChild(label);
        return listItem;
    };
    return HTMLHelper;
}());
var taskInput = document.getElementById("new-task");
var addButton = document.getElementById("add-task");
var incompleteTaskHolder = document.getElementById("incomplete-tasks");
var completedTaskHolder = document.getElementById("completed-tasks");
var taskMAnager = new TaskManager();
addButton.addEventListener("click", function () {
    taskMAnager.addTask(taskInput.value);
    displayTask();
    clear();
    //console.log(taskInput.value);
});
function displayTask() {
    completedTaskHolder.innerHTML = "";
    incompleteTaskHolder.innerHTML = "";
    taskMAnager.tasks.forEach(function (element) {
        var listItem = HTMLHelper.createTaskItem(element);
        if (element.isCompleted) {
            completedTaskHolder === null || completedTaskHolder === void 0 ? void 0 : completedTaskHolder.appendChild(listItem);
        }
        else {
            incompleteTaskHolder === null || incompleteTaskHolder === void 0 ? void 0 : incompleteTaskHolder.appendChild(listItem);
        }
    });
}
function clear() {
    taskInput.value = '';
}
