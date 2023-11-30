import TodoTitle from "./TodoTitle"
import TodoStats from "./TodoStats"
import TodoForm from "./TodoForm"
import TodoList from "./TodoList"
import TodoDeleteCompleted from "./TodoDeleteCompleted"
import TodoFooter from "./TodoFooter"

const TodoIndex = () => {
  return (
    <>
      <main className="container-fluid p-0">
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-12 col-lg-12">
            <TodoTitle />
          </div>
          <div className="col-sm-12 col-md-12 col-lg-12 mb-3">
            <TodoStats />
          </div>
          <div className="col-sm-10 col-md-6 col-lg-4 mb-3 px-4">
            <TodoForm />
            <TodoList />
            <div className="text-end mt-3">
              <TodoDeleteCompleted />
            </div>
          </div>
        </div>
      </main>
      <TodoFooter />
    </>
  )
}

export default TodoIndex
