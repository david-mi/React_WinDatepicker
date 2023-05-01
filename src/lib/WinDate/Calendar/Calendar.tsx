import styles from "./calendar.module.css"
import Month from "./Month/Month"
import type { DateProps } from "../WinDate"

const Calendar = ({ date, setDate }: DateProps) => {
  return (
    <div className={styles.calendar}>
      <Month date={date} setDate={setDate} />
    </div>
  )
}

export default Calendar