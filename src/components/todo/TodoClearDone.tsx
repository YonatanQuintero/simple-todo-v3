const TodoClearDone = () => {
  const clearDoneHandler = () => {
    console.log("Clearing done")
  }

  return (
    <button type="button" className="btn btn-outline-info text-info" onClick={clearDoneHandler}>
      Clear Done
    </button>
  )
}

export default TodoClearDone
