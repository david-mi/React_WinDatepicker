import { useContext, useEffect, useLayoutEffect, useRef, MutableRefObject } from "react"
import { GlobalContext } from "../../Context/Global"
import styles from "./calendar.module.css"
import Month from "./Month/Month"
import Year from "./Year/Year"
import type { Timeline } from "../../Context/Global"
import type { CalendarColors } from "../.."
import { defineCalendarPosition } from "../helper"
import { handleTimeout } from "../utils"

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
    ["--calendar-dates-buttons-disabled-clr-bg", calendarColors.disabledButtonsBackground || "rgba(128, 128, 128, 0.068)"]
  ]

  useLayoutEffect(() => {
    /** Applies css root colors values for calendar, based on calendarColors props */

    calendarColorsRoot.forEach(([rootProperty, color]) => {
      document.documentElement.style.setProperty(rootProperty, color)
    })
  }, [calendarColors])


  function handleScroll() {
    const calendarPosition = defineCalendarPosition(dateInputRef as MutableRefObject<HTMLInputElement>)
    calendarRef.current.dataset.position = calendarPosition
  }

  // function handleResize({ target }: UIEvent) {
  //   const remainingScreenWidth = (target as Window).innerWidth
  //   const calendarRect = calendarRef.current.getBoundingClientRect()
  //   const { left: calendarLeftPosition, right: calendarRightPosition, x } = calendarRect
  //   const remainingScreenWidth2 = document.documentElement.clientWidth
  //   console.log({ remainingScreenWidth, remainingScreenWidth2, calendarRightPosition, x, calendarLeftPosition })
  //   const isCalendarOverflowingOnRight = calendarRightPosition > remainingScreenWidth2
  //   const overflowAmount = calendarRightPosition - remainingScreenWidth2
  //   const remainingSpaceOnCalendarLeft = calendarLeftPosition

  //   if (isCalendarOverflowingOnRight) {
  //     if (remainingSpaceOnCalendarLeft - overflowAmount > 0) {

  //       console.log({ overflowAmount, remainingSpaceOnCalendarLeft })
  //       calendarRef.current.style.left = `-${overflowAmount}px`
  //     }
  //   }
  // }

  // useEffect(() => {
  //   const intersectionObserver = new IntersectionObserver(([calendarEntry]) => {
  //     if (calendarEntry.isIntersecting === false) {
  //       console.log(calendarEntry)
  //       calendarRef.current.style.left = `-100px`
  //     }
  //   }, { threshold: 1 })

  //   intersectionObserver.observe(calendarRef.current)

  //   return () => {
  //     intersectionObserver.unobserve(calendarRef.current)
  //   }
  // }, [])

  useEffect(() => {
    const handleScrollThrottle = handleTimeout<Event>({ timeoutCallback: handleScroll, delay: 200 })
    // const handleResizeThrottle = handleTimeout<UIEvent>({ timeoutCallback: handleResize, delay: 200 })

    document.addEventListener("click", handleClick)
    document.addEventListener("scroll", handleScrollThrottle)
    // window.addEventListener("resize", handleResizeThrottle)

    return () => {
      document.removeEventListener("click", handleClick)
      document.removeEventListener("scroll", handleScrollThrottle)
      // window.removeEventListener("resize", handleResizeThrottle)
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