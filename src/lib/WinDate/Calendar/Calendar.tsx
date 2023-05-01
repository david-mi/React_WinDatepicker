import styles from "./calendar.module.css"
import Month from "./Month/Month"

const Calendar = () => {
  return (
    <div className={styles.calendar}>
      <Month />
    </div>
  )
}

export default Calendar