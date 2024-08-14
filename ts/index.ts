let todos: { id: number; title: string; completed: boolean; time: string }[] = [];
let todoId = 1;

const getValueInput = (): string | null => {
  const inputElement = document.getElementById("todoInput") as HTMLInputElement;
  return inputElement ? inputElement.value : null;
};

const renderTodos = (): void => {
  const todoList = document.getElementById("todoList")!;
  todoList.innerHTML = ""; 

  todos.forEach(todo => {
    const listItem = document.createElement("li");
    listItem.className = 'todo-item';
    listItem.innerHTML = `
      ${todo.title} - ${todo.time} 
      <button onclick="removeTodo(${todo.id})">Remove</button>`;
    todoList.appendChild(listItem);
  });
};

const addTodo = (): void => {
  const title = getValueInput();
  if (title) {
    const newTodo = {
      id: todoId++,
      title: title,
      completed: false,
      time: new Date().toLocaleString()
    };
    todos.push(newTodo);
    renderTodos();
    (document.getElementById("todoInput") as HTMLInputElement).value = "";
  } else {
    alert("Vazifa kiritilmadi");
  }
};

const removeTodo = (id: number): void => {
  todos = todos.filter(todo => todo.id !== id);
  renderTodos();
};

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("addTodo")!.addEventListener("click", addTodo);
  renderTodos(); 
});
 