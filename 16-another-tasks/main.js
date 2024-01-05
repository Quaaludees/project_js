const toDoList  = {
    todos: [],
    addTask: function (task) {
        this.todos.push(task);
    },
    removeTask: function (id) {
        this.todos = this.todos.filter(el => el.id !== id);
    },
    updateName: function (tittle, id) {
        const indToDo = this.todos.findIndex(el => el.id === id);
        if (indToDo < 0) {
            return;
        }
        this.todos[indToDo].tittle = tittle;
    },
    updateName2: function (newTittle, id) {

        this.todos = this.todos.map(el => {
            if (el.id === id) {
                return {
                    ...el,
                    tittle: newTittle,
                }
            }
            return el;
        })
    },
    sortPriority: function () {
        this.todos.sort((a, b) => a.priority - b.priority)
    }
}
toDoList.addTask({
    id: 1,
    tittle: 'Posuda',
    priority: 2,
});
toDoList.addTask({
    id: 2,
    tittle: 'kuhnua',
    priority: 4,
});
toDoList.addTask({
    id: 3,
    tittle: 'venik',
    priority: 7,
});

toDoList.removeTask(1);
toDoList.updateName('tuvalet', 11);
toDoList.updateName2('tuvalet', 26);
toDoList.sortPriority();
console.log(toDoList);

const newTask = {
    todos: [],
};

toDoList.addTask.call(newTask, {
    id: 2,
    tittle: 'kuhnua',
    priority: 4,
    description: 'shototam',
});
toDoList.addTask.call(newTask, {
    id: 9,
    tittle: 'vanna',
    priority: 10,
    description: 'dfhkjghjkdgh',
});
toDoList.addTask.call(newTask, {
    id: 6,
    tittle: 'komnata',
    priority: 4,
    description: 'shototam2',
});

toDoList.removeTask.call(newTask, 2);
toDoList.updateName.call(newTask, 'koridor', 6);
toDoList.sortPriority.call(newTask);
console.log(newTask);


