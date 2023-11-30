import { configureStore } from "@reduxjs/toolkit"
import themeReducer from "../features/theme-slice"
import { todoApi } from "../api/todo-api"

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    [todoApi.reducerPath]: todoApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(todoApi.middleware)
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
