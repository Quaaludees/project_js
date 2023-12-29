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
        this.todos.sort((a, b) => b.priority - a.priority)
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
console.log(toDoList);
toDoList.sortPriority();
console.log(toDoList);

