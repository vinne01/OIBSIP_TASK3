let taskList = [];

function addTask() {
	let newTask = document.getElementById('new-task').value;
	if (newTask === '') {
		alert('Please enter a task');
	} else {
		taskList.push(newTask);
		displayTasks();
		document.getElementById('new-task').value = '';
	}
}

function deleteTask(index) {
	taskList.splice(index, 1);
	displayTasks();
}

function displayTasks() {
	let list = document.getElementById('task-list');
	list.innerHTML = '';
	for (let i = 0; i < taskList.length; i++) {
		let taskItem = document.createElement('li');
		taskItem.className = 'task-item';
		let taskText = document.createElement('span');
		taskText.innerText = taskList[i];
		let deleteButton = document.createElement('button');
		deleteButton.className = 'delete-button';
		deleteButton.innerText = 'Delete';
		deleteButton.onclick = function() {
			deleteTask(i);
		}
		taskItem.appendChild(taskText);
		taskItem.appendChild(deleteButton);
		list.appendChild(taskItem);
	}
}

document.getElementById('add-button').addEventListener('click', addTask);
