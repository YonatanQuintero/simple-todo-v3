import TodoListItem from "./TodoListItem"
import { useGetTodosQuery } from "../../api/todo-api"

const TodoList = () => {
  const { data = [] } = useGetTodosQuery()
  return (
    <ul className="list-group">
      {data.map((todo) => (
        <TodoListItem key={todo.id} id={todo.id || 0} value={todo.value} completed={todo.completed} />
      ))}
    </ul>
  )
}

export default TodoList
