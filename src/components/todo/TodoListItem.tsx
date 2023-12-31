import React from "react"
import { useUpdateTodoMutation, useDeleteTodoMutation } from "../../api/todo-api"

type TodoListItemProps = {
  id: number
  value: string
  completed: boolean
}

const TodoListItem: React.FC<TodoListItemProps> = ({ id, value, completed }) => {
  const [updateTodo] = useUpdateTodoMutation()
  const [deleteTodo] = useDeleteTodoMutation()
  const inputId = `todo-${id}`

  const updateTodoHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    updateTodo({
      id,
      value,
      completed: event.target.checked,
    })
  }

  const removeTodoHandler = () => {
    deleteTodo(id)
  }

  return (
    <li className="list-group-item">
      <div className="row">
        <div className="col">
          <input
            className="form-check-input me-1"
            type="checkbox"
            id={inputId}
            onChange={updateTodoHandler}
            checked={completed}
          />
          <label className={`form-check-label ${completed ? "text-decoration-line-through" : ""}`} htmlFor={inputId}>
            {value}
          </label>
        </div>
        <div className="col item-action-col text-end">
          <a href="#" className="text-danger" onClick={removeTodoHandler}>
            <i className="bi bi-trash"></i>
          </a>
        </div>
      </div>
    </li>
  )
}

export default TodoListItem
