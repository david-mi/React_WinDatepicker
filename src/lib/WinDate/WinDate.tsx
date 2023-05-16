import { useContext, useRef } from "react"
import { GlobalContext } from "../Context/Global"
import Calendar from "./Calendar/Calendar"
import DateInput from "./DateInput/DateInput"
import styles from "./winDate.module.css"
import type { Props } from "../index"

const Windate = ({ calendarColors, inputProps }: Props) => {
  const { isCalendarOpen } = useContext(GlobalContext)
  const winDateRef = useRef<HTMLDivElement>(null!)
  const dateInputRef = useRef<HTMLInputElement>(null!)

  if (inputProps.onDateChange === undefined) {
    console.error("onDateChange callback is missing from props and is required")
    return null
  }

  return (
    <div className={styles.winDate} ref={winDateRef}>
      {isCalendarOpen && (
        <Calendar
          winDateRef={winDateRef}
          dateInputRef={dateInputRef}
          calendarColors={calendarColors}
        />
      )}
      <DateInput inputProps={inputProps} dateInputRef={dateInputRef} />
    </div>
  )
}

export default Windate