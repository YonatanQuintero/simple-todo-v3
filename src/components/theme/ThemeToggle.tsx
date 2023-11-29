import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { Theme, changeTheme } from "../../features/theme-slice"

const ThemeToggle = () => {
  const dispatch = useAppDispatch()
  const theme = useAppSelector((state) => state.theme)

  useEffect(() => {
    dispatch(changeTheme(theme.value))
  }, [theme])

  const toogleThemeHandler = () => {
    dispatch(changeTheme(theme.value === Theme.LIGHT ? Theme.DARK : Theme.LIGHT))
  }

  return (
    <button className="btn btn-link nav-link my-0 mx-auto" onClick={toogleThemeHandler}>
      <p className="text-info">
        {theme.value === Theme.LIGHT ? <i className="bi bi-brightness-high"></i> : <i className="bi bi-moon-stars"></i>}
      </p>
    </button>
  )
}

export default ThemeToggle
