import { forwardRef, ForwardedRef } from "react"
import { useContext } from "react"

import { GlobalContext } from "../../../../../Context/Global"
import type { DatesFormat } from "../../type"
import styles from "./dateButton.module.css"

interface Props {
  date: DatesFormat
}

const DateButton = forwardRef(({ date }: Props, ref: ForwardedRef<HTMLButtonElement | null>) => {
  const {
    getDate,
    getFormatedDate,
    isFromChosenMonth,
    isToday,
    isChosenDate,
    isOutOfMinOrMaxRange,
    isWeekend
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
      ref={ref}
      data-testid="date"
      data-today={isToday}
      data-chosen-month={isFromChosenMonth}
      data-chosen-date={isChosenDate}
      data-weekend={isWeekend}
      onClick={handleDateClick}
      autoFocus={isChosenDate}
      disabled={isOutOfMinOrMaxRange}
      type="button"
      className={styles.date}
    >
      {getDate}
    </button>
  )
})

export default DateButton