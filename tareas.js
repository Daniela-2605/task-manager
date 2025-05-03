function deleteTask(taskList, taskId) {
    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].id === taskId) {
            taskList.splice(i, 1); 
            return "Task deleted"; 
        }
    }
    return "Task not found"; 
}