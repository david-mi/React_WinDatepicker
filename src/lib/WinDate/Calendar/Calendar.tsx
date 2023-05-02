import { useContext } from "react"
import { GlobalContext } from "../../Context/Global"
import styles from "./calendar.module.css"
import Month from "./Month/Month"
import Year from "./Year/Year"
import type { Timeline } from "../../Context/Global"

const Calendar = () => {
  const { closeCalendar, timeline } = useContext(GlobalContext)

  const componentsTimeline: {
    [key in Timeline]: JSX.Element
  } = {
    "MONTH": <Month />,
    "YEAR": <Year />
  }

  return (
    <div data-testid="calendar-wrapper" className={styles.wrapper}>
      <div
        onClick={closeCalendar}
        data-testid="calendar-close-bg"
        className={styles.closeBg}
      >
      </div>
      <div className={styles.calendar}>
        {componentsTimeline[timeline]}
      </div>
    </div>
  )
}

export default Calendar