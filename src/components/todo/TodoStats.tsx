import TodoStatItem from "./TodoStatItem"

const TodoStats = () => {
  const items = [
    { value: 0, title: "Completed" },
    { value: 0, title: "In Progress" },
    { value: 0, title: "Pending" },
  ]

  return (
    <div className="bg-info-subtle py-3 border-bottom border-1 border-black">
      <h1 className="text-center display-4 fw-bold text-white"></h1>
      <div className="row justify-content-center">
        <div className="col-sm-8 col-md-6 col-lg-4 text-center">
          <div className="row">
            {items.map((item, index) => (
              <div className="col">
                <TodoStatItem key={index} value={item.value} title={item.title} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoStats
