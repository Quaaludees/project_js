const createId  = (hash = 'id') => hash + Math.random().toString(32).slice(8);

const toDoList  = {
    todos: [],
    addTask: function (task) {
        this.todos.push(task);
    },
    removeTask: function (id) {
        this.todos = this.todos.filter(el => el.id !== id);
    },
    updateName: function (newTittle, id) {

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
const mockId1 = createId()
toDoList.addTask({
    id: mockId1,
    tittle: 'Posuda',
    priority: 2,
});
toDoList.addTask({
    id: createId(),
    tittle: 'kuhnua',
    priority: 4,
});
toDoList.addTask({
    id: createId(),
    tittle: 'venik',
    priority: 7,
});

toDoList.removeTask(mockId1);
toDoList.updateName('tuvalet', 11);
console.log(toDoList);
toDoList.sortPriority();
console.log(toDoList);

