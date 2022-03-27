// clase

class TodoItem{
    constructor(public task:string, public isCompleted: Boolean){

    }
}

// Administrador de las tareas
class TaskManager{
    tasks: TodoItem[] = [];
    addTask(task:string):void{
        const newItem = new TodoItem(task, false);
        this.tasks.push(newItem);
    }
}

class HTMLHelper{
    static createTaskItem(task:TodoItem): HTMLLIElement{
        const listItem = document.createElement('li');
        const checkBox = document.createElement('input');
        
        checkBox.addEventListener('change', ()=>{
            if(checkBox.checked){
                task.isCompleted = true;
                displayTask();
            }
        });

        const label = document.createElement('label');

        checkBox.type = 'checkbox';
        label.innerText = task.task;

        listItem.appendChild(checkBox);
        listItem.appendChild(label);

        return listItem;
    }
}

const taskInput = <HTMLInputElement>document.getElementById("new-task");
const addButton = document.getElementById("add-task")!;
const incompleteTaskHolder = document.getElementById("incomplete-tasks");
const completedTaskHolder = document.getElementById("completed-tasks");
const taskMAnager = new TaskManager();

addButton.addEventListener("click", () => {
    taskMAnager.addTask(taskInput.value);
    displayTask();
    clear();
    //console.log(taskInput.value);
});

function displayTask(){
    completedTaskHolder!.innerHTML="";
    incompleteTaskHolder!.innerHTML="";

    taskMAnager.tasks.forEach(element =>{
        var listItem = HTMLHelper.createTaskItem(element);
        if(element.isCompleted){
            completedTaskHolder?.appendChild(listItem);
        } else {
            incompleteTaskHolder?.appendChild(listItem);
        }
    });
}

function clear(){
    taskInput.value = '';
}