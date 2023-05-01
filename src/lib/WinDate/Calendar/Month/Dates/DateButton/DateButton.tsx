import type { MonthDateFormat } from "../../type"
import styles from "./dateButton.module.css"
import type { DateProps } from "../../../../WinDate"

interface Props extends Pick<DateProps, "setDate"> {
  date: MonthDateFormat
}

const DateButton = ({ date, setDate }: Props) => {
  const { getDate, getFormatedDate, isFromChosenMonth, isToday } = date

  /** Update date state with clicked date from calendar */

  function handleDateClick() {
    const newDate = new Date(getFormatedDate)
    setDate(newDate)
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

export default DateButton