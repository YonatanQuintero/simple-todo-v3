import React, { useState, useRef, useEffect } from "react"

interface TodoItem {
  value: string
  isCompleted: boolean
}

const TodoForm: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [value, setValue] = useState<string>("")
  const [isCompleted, setIsCompleted] = useState<boolean>(false)

  const addTodo = (inputValue: string): void => {
    console.log(inputValue)
  }

  useEffect(() => {
    if (isCompleted) {
      inputRef.current!.focus()
      setValue("")
      setIsCompleted(false)
    }
  }, [isCompleted])

  const addHandler = (): void => {
    if (value.length < 1) {
      alert("Please enter a value")
      return
    }

    addTodo(value)
    setIsCompleted(true)
  }

  const valueHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(event.target.value)
  }

  return (
    <form>
      <div className="input-group mb-3">
        <input
          type="text"
          value={value}
          onChange={valueHandler}
          ref={inputRef}
          className="form-control"
          autoFocus
          placeholder="What do you need to do?"
          aria-label="What do you need to do?"
          aria-describedby="add-todo"
        />
        <button className="btn btn-outline-info" type="button" id="add-todo" onClick={addHandler}>
          Add
        </button>
      </div>
    </form>
  )
}

export default TodoForm
