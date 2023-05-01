import { useEffect, useRef, useContext, KeyboardEvent } from "react"
import { GlobalContext } from "../../Context/Global"
import type { ChangeEvent } from "react"
import { formatDate } from "../Calendar/Month/helper"
import styles from "./dateInput.module.css"
import CalendarIcon from "./CalendarIcon/CalendarIcon"

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

  useEffect(() => {
    dateInputRef.current.value = formatDate(date)
  }, [date])

  /**
   * Open calendar component instead of opening the navigator default calendar 
   * when pressing enter on focused calendar icon
   */

  function preventEnterKey(event: KeyboardEvent) {
    const key = event.key

    if (key === "Enter") {
      event.preventDefault()
      openCalendar()
    }
  }

  return (
    <div className={styles.container}>
      <input
        type="date"
        name="date"
        id="date"
        onChange={handleChange}
        ref={dateInputRef}
        onClick={(e) => e.preventDefault()}
        onKeyDown={preventEnterKey}
      />
      <CalendarIcon className={styles.icon} openCalendar={openCalendar} />
    </div>
  )
}
export default DateInput