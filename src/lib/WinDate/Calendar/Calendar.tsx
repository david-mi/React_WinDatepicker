import { useContext, useEffect, useLayoutEffect, useRef, MutableRefObject } from "react"
import { GlobalContext } from "../../Context/Global"
import styles from "./calendar.module.css"
import Month from "./Month/Month"
import Year from "./Year/Year"
import type { Timeline } from "../../Context/Global"
import type { CalendarColors } from "../.."
import { defineCalendarPosition } from "../helper"

interface Props {
  dateInputRef: MutableRefObject<HTMLInputElement>
  winDateRef: MutableRefObject<HTMLDivElement>
  calendarColors?: CalendarColors
}

const Calendar = ({ dateInputRef, winDateRef, calendarColors = {} }: Props) => {
  const { closeCalendar, timeline, calendarPosition } = useContext(GlobalContext)
  const calendarRef = useRef<HTMLDivElement>(null!)

  const componentsTimeline: {
    [key in Timeline]: JSX.Element
  } = {
    "MONTH": <Month />,
    "YEAR": <Year />
  }

  const calendarColorsRoot = [
    ["--calendar-bg", calendarColors.background || "#1f1f1f"],
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
    ["--calendar-disabled-clr", calendarColors.disabled || "rgba(185, 185, 185, 0.089)"],
    ["--calendar-disabled-bg", calendarColors.disabledBackground || "rgba(128, 128, 128, 0.068)"]
  ]

  useLayoutEffect(() => {
    /** Applies css root colors values for calendar, based on calendarColors props */

    calendarColorsRoot.forEach(([rootProperty, color]) => {
      document.documentElement.style.setProperty(rootProperty, color)
    })
  }, [calendarColors])


  useLayoutEffect(() => {
    /** 
     * Observe intersections for calendar div 
     * 
     * Define calendar dataset position for each intersections to put it on top or
     * bottom of input
     */

    const observer = new IntersectionObserver(([{ isIntersecting }]) => {
      if (isIntersecting || calendarRef.current === null) return

      const calendarPosition = defineCalendarPosition(dateInputRef as MutableRefObject<HTMLInputElement>)
      calendarRef.current.dataset.position = calendarPosition
    }, { threshold: 1 })

    observer.observe(calendarRef.current)

    return () => {
      observer.unobserve(calendarRef.current)
    }
  }, [])

  useEffect(() => {
    document.addEventListener("click", handleClick)

    return () => {
      document.removeEventListener("click", handleClick)
    }
  }, [])

  /**
   * Close calendar only if we click outstide winDateRef div scope
   * 
   * - Clicking on calendar won't trigger closeCalendar
   * - Clicking on input won't trigger closeCalendar
   */

  function handleClick(event: MouseEvent) {
    const clickedElement = event.target as HTMLElement
    const elementToCompare = winDateRef as MutableRefObject<HTMLDivElement>
    const shouldCloseCalendar = elementToCompare.current.contains(clickedElement) === false;

    if (shouldCloseCalendar) {
      closeCalendar()
    }
  }

  return (
    <div
      ref={calendarRef}
      data-position={calendarPosition}
      className={styles.calendar}
    >
      {componentsTimeline[timeline]}
    </div>
  )
}

export default Calendar