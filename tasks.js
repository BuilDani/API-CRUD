
    const tasks = {
        task: [{
            title: "test",
            description: "null",
            completed: false,
            visibility: true,
            canRepeat: [{
                canIt: true,
                repeat: true,
                count: 0,
                maxCount: 0,
                //todo: when: (06,09,2025),
        }],
        }],
    }
    //create task
    function addTask(dados){
        tasks.task.push({
            title: dados.title,
            description: dados.description,
            completed: dados.completed,
        })
    }
    addTask({title:"teste2", description:"fazerteste",completed:false});
    console.log(tasks.task);
    

    //repeat task
    function repeatTask(){

    }

    //read task
    function getTask(){

    }
    //update task
    function updateTask(){

    }
    //delete task
    function deleteTask(){

    }
    //toggle complete
    function completeTask(){

    }
