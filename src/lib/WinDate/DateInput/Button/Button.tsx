import { useContext } from "react"
import { GlobalContext } from "../../../Context/Global"
import styles from "./button.module.css"

const Button = () => {
  const { setTimeline, openCalendar } = useContext(GlobalContext)

  function handleClick() {
    setTimeline("MONTH")
    openCalendar()
  }

  return (
    <button onClick={handleClick} className={styles.button}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        tabIndex={0}
      >
        <path fill="#888888" d="M11 14v-2h2v2h-2Zm-4 0v-2h2v2H7Zm8 0v-2h2v2h-2Zm-4 4v-2h2v2h-2Zm-4 0v-2h2v2H7Zm8 0v-2h2v2h-2ZM3 22V4h3V2h2v2h8V2h2v2h3v18H3Zm2-2h14V10H5v10Z">
        </path>
      </svg>
    </button>
  )
}
export default Button