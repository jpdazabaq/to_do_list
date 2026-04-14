document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('new-task-input');
    const saveBtn = document.getElementById('save-task-btn');
    const taskList = document.getElementById('task-list');

    // Inicialmente el botón save está deshabilitado
    saveBtn.disabled = true;

    // Habilitar/deshabilitar el botón de guardar según el input
    taskInput.addEventListener('input', () => {
        saveBtn.disabled = taskInput.value.trim() === '';
    });

    // Función para crear una nueva tarea
    const createTask = (text) => {
        const li = document.createElement('li');
        li.className = 'task-item';
        
        li.innerHTML = `
            <div class="task-content">
                <button class="check-btn"><span class="material-symbols-outlined">radio_button_unchecked</span></button>
                <span class="task-text">${text}</span>
            </div>
            <button class="star-btn"><span class="material-symbols-outlined">star_border</span></button>
        `;

        // Añadir evento al botón de check
        const checkBtn = li.querySelector('.check-btn');
        checkBtn.addEventListener('click', () => {
            const icon = checkBtn.querySelector('.material-symbols-outlined');
            if (icon.textContent === 'radio_button_unchecked') {
                icon.textContent = 'check_circle';
                icon.style.color = 'var(--accent-color)';
                li.querySelector('.task-text').style.textDecoration = 'line-through';
                li.querySelector('.task-text').style.color = 'var(--text-secondary)';
            } else {
                icon.textContent = 'radio_button_unchecked';
                icon.style.color = 'var(--text-secondary)';
                li.querySelector('.task-text').style.textDecoration = 'none';
                li.querySelector('.task-text').style.color = 'var(--text-primary)';
            }
        });

        // Añadir evento al botón de estrella
        const starBtn = li.querySelector('.star-btn');
        starBtn.addEventListener('click', () => {
            const icon = starBtn.querySelector('.material-symbols-outlined');
            if (icon.textContent === 'star_border') {
                icon.textContent = 'star';
                icon.style.color = 'var(--accent-color)';
            } else {
                icon.textContent = 'star_border';
                icon.style.color = 'var(--text-secondary)';
            }
        });

        return li;
    };

    // Guardar nueva tarea
    saveBtn.addEventListener('click', () => {
        const text = taskInput.value.trim();
        if (text) {
            const newTask = createTask(text);
            taskList.appendChild(newTask);
            taskInput.value = '';
            saveBtn.disabled = true;
            taskInput.focus();
        }
    });

    // Guardar con la tecla Enter
    taskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            saveBtn.click();
        }
    });

    // Añadir funcionalidad a la tarea de muestra inicial
    const initialCheckBtn = document.querySelector('.check-btn');
    initialCheckBtn.addEventListener('click', () => {
        const icon = initialCheckBtn.querySelector('.material-symbols-outlined');
        const taskText = initialCheckBtn.nextElementSibling;
        if (icon.textContent === 'radio_button_unchecked') {
            icon.textContent = 'check_circle';
            icon.style.color = 'var(--accent-color)';
            taskText.style.textDecoration = 'line-through';
            taskText.style.color = 'var(--text-secondary)';
        } else {
            icon.textContent = 'radio_button_unchecked';
            icon.style.color = 'var(--text-secondary)';
            taskText.style.textDecoration = 'none';
            taskText.style.color = 'var(--text-primary)';
        }
    });

    const initialStarBtn = document.querySelector('.star-btn');
    initialStarBtn.addEventListener('click', () => {
        const icon = initialStarBtn.querySelector('.material-symbols-outlined');
        if (icon.textContent === 'star_border') {
            icon.textContent = 'star';
            icon.style.color = 'var(--accent-color)';
        } else {
            icon.textContent = 'star_border';
            icon.style.color = 'var(--text-secondary)';
        }
    });
});
