document.addEventListener('DOMContentLoaded', function() {
    const todoList = document.getElementById('todoList');
    let completedTasks = 0;


    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => {
            data.forEach(todo => {
                const todoItem = document.createElement('div');
                todoItem.classList.add('form-check', 'mt-2');

                
                const checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.classList.add('form-check-input');
                checkbox.id = 'todo-' + todo.id;
                checkbox.checked = false; 

                
                const label = document.createElement('label');
                label.classList.add('form-check-label');
                label.setAttribute('for', 'todo-' + todo.id);
                label.innerText = todo.title;

                
                todoItem.appendChild(checkbox);
                todoItem.appendChild(label);

                
                todoList.appendChild(todoItem);

                
                checkbox.addEventListener('change', function() {
                    if (checkbox.checked) {
                        completedTasks++;
                    } else {
                        completedTasks--;
                    }

                    
                    if (completedTasks === 5) {
                        new Promise((resolve) => {
                            resolve("Congrats. 5 Tasks have been Successfully Completed");
                        }).then(alert);
                    }
                });
            });
        })
        .catch(err => console.error('Error fetching todos:', err));

   
    const logoutBtn = document.getElementById('logoutBtn');
    logoutBtn.addEventListener('click', function() {
        window.location.href = 'index.html'; 
    });
});
