import styles from "./weekDays.module.css"
import { weekDays } from "../../../../langs"

const Weekdays = () => {
  return (
    <div className={styles.weekDays}>
      {weekDays.map((weekDay) => {
        return (
          <span data-testid="weekday" key={weekDay}>{weekDay}</span>
        )
      })}
    </div>
  )
}
export default Weekdays