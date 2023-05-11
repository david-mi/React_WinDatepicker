import { useContext, forwardRef } from "react"
import { GlobalContext } from "../../../Context/Global"
import styles from "./button.module.css"

const Button = forwardRef<HTMLButtonElement>((_, buttonRef) => {
  const { setTimeline, openCalendar } = useContext(GlobalContext)

  function handleClick() {
    setTimeline("MONTH")
    openCalendar()
  }

  return (
    <button
      onClick={handleClick}
      ref={buttonRef}
      className={styles.button}
    >
    </button>
  )
})

export default Button