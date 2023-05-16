import { useContext, useRef, useLayoutEffect, MutableRefObject } from "react"
import { GlobalContext } from "../../../Context/Global"
import styles from "./inputButton.module.css"
import { defineCalendarPosition } from "../../helper"

interface Props {
  dateInputRef: MutableRefObject<HTMLInputElement>
  isFocusingInputRef: MutableRefObject<boolean | undefined>
}

const InputButton = ({ dateInputRef, isFocusingInputRef }: Props) => {
  const { setTimeline, isCalendarOpen, openCalendar, closeCalendar, setCalendarPosition } = useContext(GlobalContext)
  const buttonRef = useRef<HTMLButtonElement>(null!)

  function handleClick() {
    isFocusingInputRef.current = false
    setTimeline("MONTH")

    if (isCalendarOpen) {
      return closeCalendar()
    }

    const calendarPosition = defineCalendarPosition(dateInputRef as MutableRefObject<HTMLInputElement>)
    setCalendarPosition(calendarPosition)
    openCalendar()
  }

  useLayoutEffect(() => {
    /** Set right position of open / close calendar invisible button based to match input padding-right value */

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
}

export default InputButton