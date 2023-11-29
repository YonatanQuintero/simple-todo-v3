import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const key: string = "app-theme"

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

interface IThemeState {
  value: string
}

const initialState: IThemeState = {
  value: localStorage.getItem(key) || Theme.LIGHT,
}

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action: PayloadAction<string>) => {
      const theme = action.payload
      localStorage.setItem(key, theme)
      document.documentElement.setAttribute("data-bs-theme", theme)
      state.value = theme
    },
  },
})

const themeReducer = themeSlice.reducer
export const { changeTheme } = themeSlice.actions
export default themeReducer
