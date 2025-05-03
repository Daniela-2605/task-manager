function listAllTasks(taskList) {
    for (const task of taskList) {
        console.log(`${task.id} - ${task.description} - Completed: ${task.completed}`);
    }
}