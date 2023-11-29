import TodoListItem from "./TodoListItem"

const TodoList = () => {
  const todos: any = []
  return (
    <ul className="list-group">
      {todos.map((todo: any) => (
        <TodoListItem key={todo.id} id={todo.id} value={todo.value} />
      ))}
    </ul>
  )
}

export default TodoList
