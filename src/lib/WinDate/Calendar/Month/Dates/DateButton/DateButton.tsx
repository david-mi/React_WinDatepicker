import { useRef } from "react"
import { useContext } from "react"
import { GlobalContext } from "../../../../../Context/Global"
import type { DatesFormat } from "../../type"
import styles from "./dateButton.module.css"

interface Props {
  date: DatesFormat
}

const DateButton = ({ date }: Props) => {
  const {
    getDate,
    getFormatedDate,
    isFromChosenMonth,
    isToday,
    isChosenDate,
    isFirstDayOfPreviousMonth,
    isFirstDayOfNextMonth
  } = date

  const buttonRef = useRef<HTMLButtonElement>(null!)

  const { setDate, closeCalendar } = useContext(GlobalContext)

  /** Update date state with clicked date from calendar */

  function handleDateClick() {
    const newDate = new Date(getFormatedDate)
    setDate(newDate)
    closeCalendar()
  }

  return (
    <button
      ref={buttonRef}
      data-testid="date"
      data-today={isToday}
      data-chosen-month={isFromChosenMonth}
      data-chosen-date={isChosenDate}
      data-next-month-first-day={isFirstDayOfNextMonth}
      data-previous-month-first-day={isFirstDayOfPreviousMonth}
      className={styles.date}
      onClick={handleDateClick}
      autoFocus={isChosenDate}
    >
      {getDate}
    </button>
  )
}

export default DateButton