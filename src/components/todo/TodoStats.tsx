import React from "react"
import { useGetTodosQuery } from "../../api/todo-api"
import TodoStatItem from "./TodoStatItem"

const TodoStats: React.FC = () => {
  const { data = [] } = useGetTodosQuery()
  const total = data.length
  const pending = data.filter((todo) => !todo.completed).length
  const completed = total - pending

  const items = [
    {
      title: "Pending",
      value: pending,
    },
    {
      title: "Completed",
      value: completed,
    },
    {
      title: "Total",
      value: total,
    },
  ]

  return (
    <div className="bg-info-subtle py-3 border-bottom border-1 border-black">
      <h1 className="text-center display-4 fw-bold text-white"></h1>
      <div className="row justify-content-center">
        <div className="col-sm-8 col-md-6 col-lg-4 text-center">
          <div className="row">
            {items.map((item, index) => (
              <div key={index} className="col">
                <TodoStatItem value={item.value} title={item.title} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoStats
