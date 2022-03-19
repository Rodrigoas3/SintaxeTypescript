type todo = {
    title: string;
    description: string;
    completed: boolean;
};

//Readonly
const todo: Readonly<todo> = {
    title: "Assitir Dark de novo",
    description: "Relembrar os detalhes",
    completed: false,
};

console.log(todo);

//todo.completed = true;

console.log(todo);

function updateTodo (todo: todo, fieldsToUpdate: Partial <Todo> ) {
    return {...todo, ...fieldsToUpdate }
}

const todo2: Todo = updateTodo(todo, {name: true});

console.log(todo2);

//Pick
type TodoPreview = Pick<Todo, "title" | "descripition">

const todo3: TodoPreview = {
    title: "fechar Ghost of Tsushima",
    completed: false 
}

////Omit
type TodoPreview2 = Omit<todo, "description">
