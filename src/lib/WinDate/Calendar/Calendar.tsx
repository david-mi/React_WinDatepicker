import { useContext } from "react"
import { GlobalContext } from "../../Context/Global"
import styles from "./calendar.module.css"
import Month from "./Month/Month"
import Year from "./Year/Year"

const Calendar = () => {
  const { closeCalendar } = useContext(GlobalContext)

  return (
    <div data-testid="calendar-wrapper" className={styles.wrapper}>
      <div
        onClick={closeCalendar}
        data-testid="calendar-close-bg"
        className={styles.closeBg}
      >
      </div>
      <div className={styles.calendar}>
        <Month />
        {/* <Year /> */}
      </div>
    </div>
  )
}

export default Calendar