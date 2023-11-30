import { useDeleteTodoMutation, useGetTodosQuery } from "../../api/todo-api"

const TodoDeleteCompleted = () => {
  const { data = [] } = useGetTodosQuery()
  const [deleteTodo] = useDeleteTodoMutation()

  const deleteCompletedHandler = () => {
    const completedTodos = data.filter((todo) => todo.completed === true)
    completedTodos.forEach((todo) => deleteTodo(todo.id))
  }

  return (
    <button type="button" className="btn btn-outline-info text-info" onClick={deleteCompletedHandler}>
      Delete completed
    </button>
  )
}

export default TodoDeleteCompleted
