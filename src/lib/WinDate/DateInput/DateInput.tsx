import { useEffect, useRef, useContext, KeyboardEvent } from "react"
import { GlobalContext } from "../../Context/Global"
import type { ChangeEvent } from "react"
import { formatDate } from "../utils"
import styles from "./dateInput.module.css"
import Button from "./Button/Button"

const DateInput = () => {
  const dateInputRef = useRef<HTMLInputElement>(null!)
  const editFromInput = useRef(false)

  const { date, setDate, openCalendar } = useContext(GlobalContext)

  /**
  * Update date from retrieved date from input
  * - if retrieved date is null, add the current date
  */

  function handleChange({ target }: ChangeEvent<HTMLInputElement>) {
    const targetDate = target.valueAsDate
    if (targetDate === null) return

    const newDate = new Date(targetDate)
    setDate(newDate)
  }

  useEffect(() => {
    /** Change input value only if date edition is not coming from input */
    if (editFromInput.current === false) {
      dateInputRef.current.value = formatDate(date)
    }
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

  function handleBlur() {
    editFromInput.current = false
  }

  function handleFocus() {
    editFromInput.current = true
  }

  return (
    <div className={styles.container}>
      <input
        type="date"
        name="date"
        id="date"
        ref={dateInputRef}
        onChange={handleChange}
        onClick={(e) => e.preventDefault()}
        onKeyDown={preventEnterKey}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
      <Button />
    </div>
  )
}
export default DateInput