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
    isChosenDate
  } = date

  const { setDate, closeCalendar, setUpdateInput } = useContext(GlobalContext)

  /** Update date state with clicked date from calendar */

  function handleDateClick() {
    const newDate = new Date(getFormatedDate)
    setDate(newDate)
    setUpdateInput(true)
    closeCalendar()
  }

  return (
    <button
      ref={ref}
      data-testid="date"
      data-today={isToday}
      data-chosen-month={isFromChosenMonth}
      data-chosen-date={isChosenDate}
      className={styles.date}
      onClick={handleDateClick}
      autoFocus={isChosenDate}
    >
      {getDate}
    </button>
  )
})

export default DateButton