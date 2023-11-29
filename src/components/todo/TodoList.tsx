import TodoListItem from "./TodoListItem"
import { useGetTodosQuery } from "../../features/todo-api"

const TodoList = () => {
  const { data = [] } = useGetTodosQuery()
  return (
    <ul className="list-group">
      {data.map((todo) => (
        <TodoListItem key={todo.id} id={todo.id} value={todo.value} />
      ))}
    </ul>
  )
}

export default TodoList
