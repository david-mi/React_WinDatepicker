import { useContext, useEffect, useLayoutEffect, useRef, forwardRef, MutableRefObject } from "react"
import { GlobalContext } from "../../Context/Global"
import styles from "./calendar.module.css"
import Month from "./Month/Month"
import Year from "./Year/Year"
import type { Timeline } from "../../Context/Global"
import { defineCalendarPosition } from "../helper"

interface Props {
  dateInputRef: MutableRefObject<HTMLInputElement>
  winDateRef: MutableRefObject<HTMLDivElement>
}

const Calendar = ({ dateInputRef, winDateRef }: Props) => {
  const { closeCalendar, timeline, calendarPosition } = useContext(GlobalContext)
  const calendarRef = useRef<HTMLDivElement>(null!)

  const componentsTimeline: {
    [key in Timeline]: JSX.Element
  } = {
    "MONTH": <Month />,
    "YEAR": <Year />
  }

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

  useEffect(() => {
    document.addEventListener("click", handleClick)

    return () => {
      document.removeEventListener("click", handleClick)
    }
  }, [])

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