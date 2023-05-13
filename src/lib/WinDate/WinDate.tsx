import { useContext, useLayoutEffect, useRef } from "react"
import { GlobalContext } from "../Context/Global"
import Calendar from "./Calendar/Calendar"
import DateInput from "./DateInput/DateInput"
import styles from "./winDate.module.css"
import type { Props } from "../index"


const Windate = ({ calendarColors = {}, inputProps }: Props) => {
  const { isCalendarOpen } = useContext(GlobalContext)
  const winDateRef = useRef<HTMLDivElement>(null!)

  if (inputProps.onDateChange === undefined) {
    console.error("onDateChange callback is missing from props and is required")
    return null
  }

  const calendarColorsRoot = [
    ["--calendar-bg", calendarColors.background || "#1f1f1f"],
    // ["--calendar-close-bg", calendarColors.closeBackground || "rgba(66, 66, 66, 0.774)"],
    ["--calendar-close-bg", calendarColors.closeBackground || "transparent"],
    ["--calendar-header-buttons-clr", calendarColors.headerButtonsText || "#cdcdcd"],
    ["--calendar-header-buttons-clr-hover", calendarColors.headerButtonsTextHover || "white"],
    ["--calendar-weekdays-clr", calendarColors.weekDaysText || "white"],
    ["--calendar-chosen-clr", calendarColors.chosenButtonText || "white"],
    ["--calendar-chosen-border", calendarColors.chosenBorder || "#8c8c8c"],
    ["--calendar-current-bg", calendarColors.currentButtonBackground || "#3f3f3f"],
    ["--calendar-current-border", calendarColors.currentButtonBorder || "#3f3f3f"],
    ["--calendar-current-border-inner", calendarColors.currentButtonSecondBorder || "black"],
    ["--calendar-not-current-clr", calendarColors.notCurrentButtonText || "#797979"],
    ["--calendar-border-hover", calendarColors.buttonBorderHover || "#8c8c8c"],
  ]

  useLayoutEffect(() => {
    calendarColorsRoot.forEach(([rootProperty, color]) => {
      document.documentElement.style.setProperty(rootProperty, color)
    })
  }, [calendarColors])

  return (
    <div className={styles.winDate} ref={winDateRef}>
      {isCalendarOpen && <Calendar ref={winDateRef} />}
      <DateInput inputProps={inputProps} />
    </div>
  )
}

export default Windate