import { useContext } from "react"
import { GlobalContext } from "../../Context/Global"
import styles from "./calendar.module.css"
import Month from "./Month/Month"

const Calendar = () => {
  const { closeCalendar } = useContext(GlobalContext)

  return (
    <div className={styles.wrapper}>
      <div className={styles.closeBg} onClick={closeCalendar}></div>
      <div className={styles.calendar}>
        <Month />
      </div>
    </div>
  )
}

export default Calendar