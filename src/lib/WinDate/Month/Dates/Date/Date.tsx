import type { MonthDateFormat } from "../../type"
import styles from "./date.module.css"

interface Props {
  date: MonthDateFormat
}

const Date = ({ date }: Props) => {
  const { getDate, getFormatedDate, isFromChosenMonth, isToday } = date

  /** Create classNames based on props values */

  function handleDateClick() {
    console.info(getFormatedDate)
  }

  return (
    <button
      data-testid="date"
      data-today={isToday}
      data-chosen-month={isFromChosenMonth}
      className={styles.date}
      onClick={handleDateClick}
    >
      {getDate}
    </button>
  )
}

export default Date