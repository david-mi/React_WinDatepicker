import { useEffect, useRef, useContext } from "react"
import { GlobalContext } from "../../Context/Global"
import type { ChangeEvent } from "react"
import { formatDate } from "../Calendar/Month/helper"

const DateInput = () => {
  const dateInputRef = useRef<HTMLInputElement>(null!)
  const { date, setDate } = useContext(GlobalContext)

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