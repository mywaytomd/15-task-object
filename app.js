const ToDoList = {
    tasks: [
        {
            id: 1,
            priority: 1, 
            title: 'Clean dishes',
        }
    ],
    addTask(title, priority, id){
        this.tasks.push({id, title, priority})
    },
    removeTask(id){
        this.tasks = this.tasks.filter((el) => el.id !== id)
         
    },
    updateTask(id, title, priority){
        const task = this.tasks.find((el) => el.id === id)
        if(!task) {
            console.log('Task not found')
            return 
        }

        if(typeof title === 'string' && title.length){
            task.title = title
        }

        if(Number(priority) && !isNaN(Number(priority) ) ){
            task.priority = Number(priority) 
        }
    },
    sortTasks(isAsc){
        this.tasks.sort((a,b) => isAsc ?  a.priority - b.priority : b.priority -a.priority)
    }
}