import { useContext, useEffect, useLayoutEffect, useRef, MutableRefObject } from "react"
import { GlobalContext } from "../../Context/Global"
import styles from "./calendar.module.css"
import Month from "./Month/Month"
import Year from "./Year/Year"
import type { Timeline } from "../../Context/Global"
import type { CalendarColors } from "../.."
import { defineCalendarVerticalPosition } from "../helper"
import { handleTimeout } from "../utils"

interface Props {
  dateInputRef: MutableRefObject<HTMLInputElement>
  winDateRef: MutableRefObject<HTMLDivElement>
  calendarColors?: CalendarColors
}

const Calendar = ({ dateInputRef, winDateRef, calendarColors = {} }: Props) => {
  const { closeCalendar, timeline, calendarVerticalPosition } = useContext(GlobalContext)
  const calendarRef = useRef<HTMLDivElement>(null!)

  const componentsTimeline: {
    [key in Timeline]: JSX.Element
  } = {
    "MONTH": <Month />,
    "YEAR": <Year />
  }

  const calendarColorsRoot = [
    ["--calendar-clr-bg", calendarColors.background || "#1f1f1f"],
    ["--calendar-header-buttons-clr", calendarColors.headerButtons || "#cdcdcd"],
    ["--calendar-header-buttons-clr-hover", calendarColors.headerButtonsHover || "white"],
    ["--calendar-weekdays-clr", calendarColors.weekDays || "white"],
    ["--calendar-dates-buttons-clr-border-hover", calendarColors.datesButtonsBorderHover || "#8c8c8c"],
    ["--calendar-dates-from-chosen-month-buttons-clr", calendarColors.datesFromChosenMonthButtons || "white"],
    ["--calendar-dates-from-chosen-month-buttons-clr-bg", calendarColors.datesFromChosenMonthButtonsBackground || "#3f3f3f"],
    ["--calendar-dates-from-chosen-month-buttons-clr-border", calendarColors.datesFromChosenMonthButtonsBorder || "#8c8c8c"],
    ["--calendar-dates-outside-chosen-month-buttons-clr", calendarColors.datesOutsideChosenMonthButtons || "#797979"],
    ["--calendar-date-selected-button-clr", calendarColors.selectedDateButton || "white"],
    ["--calendar-date-selected-button-clr-bg", calendarColors.selectedDateButtonBackground || "inherit"],
    ["--calendar-date-selected-button-clr-border", calendarColors.selectedDateButtonBorder || "#8c8c8c"],
    ["--calendar-today-button-clr", calendarColors.todayButton || "white"],
    ["--calendar-today-button-clr-bg", calendarColors.todayButtonBackground || "#3f3f3f"],
    ["--calendar-today-button-clr-border", calendarColors.todayButtonBorder || "#3f3f3f"],
    ["--calendar-today-button-clr-border-inner", calendarColors.todayButtonSecondBorder || "black"],
    ["--calendar-weekends-buttons-clr-bg", calendarColors.weekendsButtonsBackground || "inherit"],
    ["--calendar-dates-buttons-disabled-clr", calendarColors.disabledButtons || "rgba(185, 185, 185, 0.089)"],
    ["--calendar-dates-buttons-disabled-clr-bg", calendarColors.disabledButtonsBackground || "rgba(128, 128, 128, 0.068)"],
    ["--calendar-button-clicked-clr", calendarColors.clickedButton || "#4f4f4f"]
  ]

  useLayoutEffect(() => {
    /** Applies css root colors values for calendar, based on calendarColors props */

    calendarColorsRoot.forEach(([rootProperty, color]) => {
      document.documentElement.style.setProperty(rootProperty, color)
    })
  }, [calendarColors])

  useLayoutEffect(() => {
    setCalendarHorizontalTranslate()
  }, [])

  useEffect(() => {
    const handleScrollThrottle = handleTimeout<Event>({ timeoutCallback: handleScroll, delay: 200 })

    document.addEventListener("click", handleClick)
    document.addEventListener("scroll", handleScrollThrottle)
    window.addEventListener("resize", setCalendarHorizontalTranslate)

    return () => {
      document.removeEventListener("click", handleClick)
      document.removeEventListener("scroll", handleScrollThrottle)
      window.removeEventListener("resize", setCalendarHorizontalTranslate)
    }
  }, [])

  /**
   * Defines calendar horizontal translate based on overflow amount at the right side of the screen
   * - if there is no more space to translate on the left, return null
   */

  function defineCalendarHorizontalTranslate(): number | null {
    const screenWidth = document.documentElement.clientWidth
    const calendarWidth = calendarRef.current.offsetWidth
    const remainingSpaceAtCalendarLeft = calendarRef.current.getBoundingClientRect().left
    const remainingSpaceAtInputLeft = dateInputRef.current.getBoundingClientRect().left

    const calendarRightOverflow = (remainingSpaceAtInputLeft + calendarWidth) - screenWidth
    const calendarHorizontalTranslate = calendarRightOverflow > 0
      ? -calendarRightOverflow
      : 0

    const shouldTranslate = remainingSpaceAtCalendarLeft > 0

    return shouldTranslate
      ? calendarHorizontalTranslate
      : null
  }

  function setCalendarHorizontalTranslate() {
    const calendarHorizontalTranslate = defineCalendarHorizontalTranslate()
    if (calendarHorizontalTranslate !== null) {
      calendarRef.current.style.transform = `translateX(${calendarHorizontalTranslate}px)`
    }
  }

  /**
   * Set a new calendar vertical position if needed when scrolling
   */

  function handleScroll() {
    const calendarVerticalPosition = defineCalendarVerticalPosition(dateInputRef as MutableRefObject<HTMLInputElement>)
    const currentCalendarVerticalPosition = calendarRef.current.dataset.positionVertical

    if (calendarVerticalPosition !== currentCalendarVerticalPosition) {
      calendarRef.current.dataset.positionVertical = calendarVerticalPosition
    }
  }

  /**
   * Close calendar if clicking ouside of windateRef structure
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
      data-position-vertical={calendarVerticalPosition}
      className={styles.calendar}
    >
      {componentsTimeline[timeline]}
    </div>
  )
}

export default Calendar