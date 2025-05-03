function markTaskAsCompleted(taskList, taskId) {
    for (const task of taskList) {
        if (task.id === taskId) {
            task.completed = true;
            return task; 
        }
    }
    return "Task not found"
}