
import DateButton from "./DateButton/DateButton"
import type { MonthDateFormat } from "../type"
import styles from "./dates.module.css"
import type { DateProps } from "../../../WinDate"

interface Props extends Pick<DateProps, "setDate"> {
  dates: MonthDateFormat[]
}

const Dates = ({ dates, setDate }: Props) => {
  return (
    <div className={styles.dates}>
      {dates.map((date, index) => {
        return <DateButton key={index} date={date} setDate={setDate} />
      })}
    </div>
  )
}
export default Dates