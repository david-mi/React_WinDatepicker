import DateButton from "./DateButton/DateButton"
import type { DatesFormat } from "../type"
import styles from "./dates.module.css"

interface Props {
  dates: DatesFormat[]
}

const Dates = ({ dates }: Props) => {
  return (
    <div className={styles.dates}>
      {dates.map((date, index) => {
        return <DateButton key={index} date={date} />
      })}
    </div>
  )
}
export default Dates