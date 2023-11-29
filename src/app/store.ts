import { configureStore } from "@reduxjs/toolkit"
import themeReducer from "../features/theme-slice"

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
