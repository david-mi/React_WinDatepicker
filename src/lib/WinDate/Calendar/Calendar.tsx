import { useContext } from "react"
import { GlobalContext } from "../../Context/Global"
import styles from "./calendar.module.css"
import Month from "./Month/Month"

const Calendar = () => {
  const { closeCalendar } = useContext(GlobalContext)

  return (
    <div className={styles.bg}>
      <div className={styles.wrapper} onClick={closeCalendar}></div>
      <div className={styles.calendar}>
        <Month />
      </div>
    </div>
  )
}

export default Calendar