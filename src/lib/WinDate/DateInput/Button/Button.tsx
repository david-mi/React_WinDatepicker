import { useContext, useRef, forwardRef, useLayoutEffect, MutableRefObject } from "react"
import { GlobalContext } from "../../../Context/Global"
import styles from "./button.module.css"

const Button = forwardRef<HTMLInputElement>((_, dateInputRef) => {
  const { setTimeline, isCalendarOpen, openCalendar, closeCalendar, setCalendarPosition } = useContext(GlobalContext)
  const buttonRef = useRef<HTMLButtonElement>(null!)

  function defineCalendarPosition(dateInputRef: MutableRefObject<HTMLInputElement>) {
    const {
      bottom: inputBottom,
      top: inputTop
    } = dateInputRef.current.getBoundingClientRect()
    const visibleSpaceAboveInput = inputTop
    const visibleSpaceUnderInput = window.innerHeight - inputBottom
    const calendarHeight = 345

    const canPutCalendarOnTop = visibleSpaceAboveInput > calendarHeight
    const canPutCalendarOnBottom = visibleSpaceUnderInput >= calendarHeight
    const calendarPosition = canPutCalendarOnBottom === false && canPutCalendarOnTop
      ? "TOP"
      : "BOTTOM"

    return calendarPosition
  }

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