import { useContext } from "react"
import { GlobalContext } from "../../../../../Context/Global"
import type { MonthDateFormat } from "../../type"
import styles from "./dateButton.module.css"

interface Props {
  date: MonthDateFormat
}

const DateButton = ({ date }: Props) => {
  const { getDate, getFormatedDate, isFromChosenMonth, isToday } = date

  const { setDate } = useContext(GlobalContext)

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