import { useContext } from "react"
import { GlobalContext } from "../../../../../Context/Global"
import type { MonthDateFormat } from "../../type"
import styles from "./dateButton.module.css"

interface Props {
  date: MonthDateFormat
}

const DateButton = ({ date }: Props) => {
  const {
    getDate,
    getFormatedDate,
    isFromChosenMonth,
    isToday,
    isChosenDate
  } = date

  const { setDate, closeCalendar } = useContext(GlobalContext)

  /** Update date state with clicked date from calendar */

  function handleDateClick() {
    const newDate = new Date(getFormatedDate)
    setDate(newDate)
    closeCalendar()
  }

  return (
    <button
      data-testid="date"
      data-today={isToday}
      data-chosen-month={isFromChosenMonth}
      data-chosen-date={isChosenDate}
      className={styles.date}
      onClick={handleDateClick}
    >
      {getDate}
    </button>
  )
}

export default DateButton