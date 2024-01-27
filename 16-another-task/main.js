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

const mockIdForUpdate = createId();
const newTask = {
    todos: [],
};

toDoList.addTask.call(newTask, {
    id: mockId1,
    tittle: 'kuhnua',
    priority: 4,
    description: 'shototam',
});
toDoList.addTask.call(newTask, {
    id: createId(),
    tittle: 'vanna',
    priority: 10,
    description: 'dfhkjghjkdgh',
});
toDoList.addTask.call(newTask, {
    id: mockIdForUpdate,
    tittle: 'komnata',
    priority: 4,
    description: 'shototam2',
});

toDoList.removeTask.call(newTask, mockId1);
toDoList.updateName.call(newTask, 'koridor',mockIdForUpdate);
toDoList.sortPriority.call(newTask);
console.log(newTask);


