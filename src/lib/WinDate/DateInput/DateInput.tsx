import { useEffect, useRef } from "react"
import type { ChangeEvent } from "react"
import type { DateProps } from "../WinDate"
import { formatDate } from "../Calendar/Month/helper"

const DateInput = ({ date, setDate }: DateProps) => {
  const dateInputRef = useRef<HTMLInputElement>(null!)


  /**
 * Update date from retrieved date from input
 * - if retrieved date is null, add the current date
 */

  function changeDateFromInput({ target }: ChangeEvent<HTMLInputElement>) {
    const targetDate = target.valueAsDate

    const newDate = targetDate
      ? new Date(targetDate)
      : new Date()

    setDate(newDate)
  }

  useEffect(() => {
    dateInputRef.current.value = formatDate(date)
  }, [date])

  return (
    <input
      type="date"
      name="date"
      id="date"
      onChange={changeDateFromInput}
      ref={dateInputRef}
    />
  )
}
export default DateInput