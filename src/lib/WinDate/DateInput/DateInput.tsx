import { useEffect, useRef, useContext, MouseEvent } from "react"
import { GlobalContext } from "../../Context/Global"
import type { ChangeEvent } from "react"
import { formatDate } from "../Calendar/Month/helper"

const DateInput = () => {
  const dateInputRef = useRef<HTMLInputElement>(null!)
  const { date, setDate, openCalendar } = useContext(GlobalContext)

  /**
  * Update date from retrieved date from input
  * - if retrieved date is null, add the current date
  */

  function handleChange({ target }: ChangeEvent<HTMLInputElement>) {
    const targetDate = target.valueAsDate

    const newDate = targetDate
      ? new Date(targetDate)
      : new Date()

    setDate(newDate)
  }

  function handleClick(event: MouseEvent<HTMLInputElement>) {
    event.preventDefault()
    openCalendar()
  }

  useEffect(() => {
    dateInputRef.current.value = formatDate(date)
  }, [date])

  return (
    <input
      type="date"
      name="date"
      id="date"
      onChange={handleChange}
      onClick={handleClick}
      ref={dateInputRef}
    />
  )
}
export default DateInput