$(document).ready(function () {
    
    $('#addTaskBtn').click(function () {
        const taskText = $('#taskInput').val().trim();
        if (taskText) {
            $('#taskList').append(
                `<li class="list-group-item d-flex justify-content-between align-items-center" >
                   <span data-task="${taskText}">${taskText}</span>
                    <button class="btn btn-danger btn-sm deleteTaskBtn">Видалити</button>
                </li>`
            );
            $('#taskInput').val(''); 
        }
    });

    
    $('#taskList').on('click', '.deleteTaskBtn', function () {
        $(this).closest('li').remove(); 
    });

    
    $('#taskList').on('click', 'span', function () {
        const taskContent = $(this).data('task');
        $('#modalTaskContent').text(taskContent); 
        $('#taskModal').modal('show'); 
    });
});