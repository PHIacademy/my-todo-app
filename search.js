export function searchTodos(todos, query) {
  return todos.filter(t => t.text.includes(query));
}