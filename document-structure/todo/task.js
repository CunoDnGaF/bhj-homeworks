let taskInput = document.getElementById('task__input');
let taskAdd = document.getElementById('tasks__add');
let tasksList = document.getElementById('tasks__list');

let taskRemove = function(e,task) {
  e.preventDefault(); 
  task.remove();
}

taskAdd.addEventListener('click', e => {
  e.preventDefault();
  
  if (!taskInput.value) {
    return;
  } else {
    let task = document.createElement('div');
    task.className = 'task';
    task.innerHTML = `<div class="task__title">${taskInput.value}</div><a href="#" class="task__remove">&times;</a>`;
    
    task.addEventListener('click', e => taskRemove(e,task));
  
    tasksList.appendChild(task);
  }
})

