import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

interface ITodo {
  id: number
  value: string
  completed: boolean
}

export const todoApi = createApi({
  reducerPath: "todo-api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5174" }),
  endpoints(builder) {
    return {
      getTodos: builder.query<ITodo[], number | void>({
        query() {
          return `/todos`
        },
      }),
    }
  },
})

export const { useGetTodosQuery } = todoApi
