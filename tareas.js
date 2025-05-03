function createTask(taskList, taskDescription) {
    const newTask = {
        id: generateUniqueId(), 
        description: taskDescription,
        completed: false
    };
    taskList.push(newTask); 
    return newTask; 
}