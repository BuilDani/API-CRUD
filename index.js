    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    function saveTask(){
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    //render the tasks
    function renderTasks() {
    const list = document.getElementById("taskList");
    list.innerHTML = "";
    
    tasks.forEach((task, i) => {
        const li = document.createElement("li");
        li.textContent = task.title;
        if (task.completed) {
            li.style.textDecoration = "line-through";
        }

        //task done btn
        const doneBtn = document.createElement("button");
        doneBtn.textContent = "✔";
        doneBtn.onclick = () => {
            tasks[i].completed = !tasks[i].completed; 
            saveTask();
            renderTasks();
        };
        //del button
        const delBtn = document.createElement("button");
        delBtn.textContent = "X";
        delBtn.onclick = () => {
        deleteTask(i);
        };

        
        li.appendChild(doneBtn);
        li.appendChild(delBtn);
        list.appendChild(li);
    });
    }
    function addTask(){
        const input = document.getElementById("taskTitle");
        if (!input.value) return;

        if (input.value.trim() === "") return;
        tasks.push({ title: input.value, completed: false });
        input.value = "";

        saveTask();
        renderTasks();
    }
    //delete task
    function deleteTask(index){
        tasks.splice(index, 1);
        saveTask();
        renderTasks();
    }

    document.getElementById("taskTitle").addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
    });

    document.getElementById("addBtn").addEventListener("click", addTask);
    renderTasks();
