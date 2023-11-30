import React, { useState, useRef, useEffect } from "react"
import { useCreateTodoMutation } from "../../api/todo-api"

const TodoForm: React.FC = () => {
  const [createTodo] = useCreateTodoMutation()
  const inputRef = useRef<HTMLInputElement>(null)
  const [isCompleted, setIsCompleted] = useState<boolean>(false)

  useEffect(() => {
    if (isCompleted) {
      inputRef.current!.focus()
      inputRef.current!.value = ""
      setIsCompleted(false)
    }
  }, [isCompleted])

  const addHandler = (event: React.ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault()
    createTodo({
      value: inputRef.current?.value || "",
      completed: false,
    })
    setIsCompleted(true)
  }

  return (
    <form onSubmit={addHandler}>
      <div className="input-group mb-3">
        <input
          type="text"
          ref={inputRef}
          className="form-control"
          autoFocus
          required
          placeholder="What do you need to do?"
          aria-label="What do you need to do?"
          aria-describedby="add-todo"
        />
        <button type="submit" className="btn btn-outline-info" id="add-todo">
          Add
        </button>
      </div>
    </form>
  )
}

export default TodoForm
