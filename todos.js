export function addTodo(todos, text) {
  // no check that text is non-empty — Code Quality agent should flag this
  todos.push({ id: todos.length + 1, text, done: false });
  return todos;
}

export function removeTodo(todos, id) {
  return todos.filter(t => t.id !== id);
}