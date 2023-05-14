import { useContext, useRef, forwardRef, useLayoutEffect, MutableRefObject } from "react"
import { GlobalContext } from "../../../Context/Global"
import styles from "./button.module.css"
import { defineCalendarPosition } from "../../helper"

const Button = forwardRef<HTMLInputElement>((_, dateInputRef) => {
  const { setTimeline, isCalendarOpen, openCalendar, closeCalendar, setCalendarPosition } = useContext(GlobalContext)
  const buttonRef = useRef<HTMLButtonElement>(null!)

  function handleClick() {
    setTimeline("MONTH")

    if (isCalendarOpen) {
      return closeCalendar()
    }

    const calendarPosition = defineCalendarPosition(dateInputRef as MutableRefObject<HTMLInputElement>)
    setCalendarPosition(calendarPosition)
    openCalendar()
  }

  useLayoutEffect(() => {
    /** Set right position of open / close calendar invisible button based on input right padding */

    const inputComputedStyle = getComputedStyle((dateInputRef as MutableRefObject<HTMLInputElement>).current)
    const inputPaddingLeft = inputComputedStyle.getPropertyValue("padding-right")

    buttonRef.current.style.right = inputPaddingLeft
  }, [dateInputRef])

  return (
    <button
      onClick={handleClick}
      ref={buttonRef}
      className={styles.button}
    >
    </button>
  )
})

export default Button