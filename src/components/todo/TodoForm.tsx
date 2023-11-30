import { useRef, ChangeEvent, FC } from "react"
import { useCreateTodoMutation } from "../../api/todo-api"

const TodoForm: FC = () => {
  const [createTodo] = useCreateTodoMutation()
  const inputRef = useRef<HTMLInputElement>(null)

  const addHandler = (event: ChangeEvent<HTMLFormElement>): void => {
    event.preventDefault()
    createTodo({
      value: inputRef.current?.value || "",
      completed: false,
    })
    inputRef.current!.focus()
    inputRef.current!.value = ""
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
