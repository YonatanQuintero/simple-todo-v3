import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

type Todo = {
  id?: number
  value: string
  completed: boolean
}

export const todoApi = createApi({
  reducerPath: "todo-api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5174" }),
  tagTypes: ["Todos"],
  endpoints(builder) {
    return {
      getTodos: builder.query<Todo[], number | void>({
        query() {
          return `/todos`
        },
        providesTags: ["Todos"],
      }),
      createTodo: builder.mutation<Todo, Todo>({
        query(todo) {
          return {
            url: `/todos`,
            method: "POST",
            body: todo,
          }
        },
        invalidatesTags: ["Todos"],
      }),
      updateTodo: builder.mutation<Todo, Todo>({
        query(todo) {
          return {
            url: `/todos/${todo.id}`,
            method: "PATCH",
            body: todo,
          }
        },
        invalidatesTags: ["Todos"],
      }),
    }
  },
})

export const { useGetTodosQuery, useCreateTodoMutation, useUpdateTodoMutation } = todoApi
