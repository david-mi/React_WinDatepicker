import type { MonthDateFormat } from "../../type"
import styles from "./date.module.css"

interface Props {
  date: MonthDateFormat
}

const Date = ({ date }: Props) => {
  const { getDate, getFormatedDate, isFromChosenMonth } = date
  const className = `${styles.date} ${isFromChosenMonth ? styles.current : ""}`

  function handleDateClick() {
    console.info(getFormatedDate)
  }

  return (
    <button className={className} onClick={handleDateClick}>
      {getDate}
    </button>
  )
}
export default Date