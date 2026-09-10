export function addTodo(todos, text) {
  todos.push({ id: todos.length + 1, text, done: false });
  return todos;
}

export function removeTodo(todos, id) {
  return todos.filter(t => t.id !== id);
}