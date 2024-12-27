document.addEventListener('DOMContentLoaded', () => {

    
    const addTaskBtn = document.querySelector('#addTaskBtn');
    const taskInput = document.querySelector('#taskInput');
    const taskList = document.querySelector('#taskList');

    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText) {
            taskList.insertAdjacentHTML('beforeend', `
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    <span data-task="${taskText}">${taskText}</span>
                    <button class="btn btn-danger btn-sm deleteTaskBtn">Видалити</button>
                </li>
            `);
            taskInput.value = ''; 
        }
    });

    taskList.addEventListener('click', (event) => {
        if (event.target.classList.contains('deleteTaskBtn')) {
            event.target.closest('li').remove();
        }
    });

    
    taskList.addEventListener('click', (event) => {
        if (event.target.tagName === 'SPAN') {
            const taskContent = event.target.dataset.task;
            document.querySelector('#modalTaskContent').textContent = taskContent;
            $('#taskModal').modal('show');
        }
    });
});