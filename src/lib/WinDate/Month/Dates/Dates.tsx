
import Date from "./Date/Date"
import type { MonthDateFormat } from "../type"
import styles from "./dates.module.css"

interface Props {
  dates: MonthDateFormat[]
}

const Dates = ({ dates }: Props) => {
  return (
    <div className={styles.dates}>
      {dates.map((date, index) => {
        return <Date key={index} date={date} />
      })}
    </div>
  )
}
export default Dates