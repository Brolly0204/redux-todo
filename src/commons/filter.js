
const active = 'active';
const completed = 'completed';
export const filterTodo = (todos, filter) => {
  return todos.filter(todo => {
    switch(filter) {
      case active:
        return !todo.completed;
      case completed:
        return todo.completed;
      default:
        return true;
    }
  })
}
