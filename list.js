function NewTask(){
    const newtask = document.getElementById('newtask');
    const tasktext = newtask.value.trim();
    if(tasktext !== ''){
        const tasklist = document.getElementById('tasklist');
        const  task = document.createElement('li');
        task.innerHTML = `<span>${tasktext}</span>
        <button onclick="editTask(this)">Edit</button>
        <button onclick="removeTask(this)">Remove</button>`;
        tasklist.appendChild(task);
        newtask.value = '';
    }
}
// Function to remove a task from the list
function removeTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();

}
//function to edit a task in a list 
function editTask(button){
    const taskItem = button.parentElement;
    const taskTextElement = taskItem.querySelector('span');
    const updatedTask = prompt('edit the task',taskTextElement.textContent);
    if (updatedTask !== null && updatedTask.trim()!== ''){
        taskTextElement.textContent=updatedTask.trim();
    }

}

// Function to mark a task as completed
document.getElementById('tasklist').addEventListener('click', function(e) {
    if (e.target.tagName === 'SPAN') {
        e.target.parentElement.classList.toggle('completed');
    }
});
