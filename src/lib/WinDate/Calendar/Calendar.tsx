import { useContext, useEffect, useLayoutEffect, useRef, forwardRef, MutableRefObject } from "react"
import { GlobalContext } from "../../Context/Global"
import styles from "./calendar.module.css"
import Month from "./Month/Month"
import Year from "./Year/Year"
import type { Timeline } from "../../Context/Global"

const Calendar = forwardRef<HTMLDivElement>((_, winDateRef) => {
  const { closeCalendar, timeline } = useContext(GlobalContext)
  const calendarRef = useRef<HTMLDivElement>(null!)

  const componentsTimeline: {
    [key in Timeline]: JSX.Element
  } = {
    "MONTH": <Month />,
    "YEAR": <Year />
  }

  function handleCalendarPosition() {
    const { bottom: calendarBottom, top: calendarTop, height: calendarHeight } = calendarRef.current.getBoundingClientRect()
    const visibleSpaceAboveCalendar = calendarTop
    const visibleSpaceUnderCalendar = window.innerHeight - calendarBottom

    const canPutCalendarOnTop = visibleSpaceAboveCalendar > calendarHeight
    const cannotPutCalendarOnBottom = visibleSpaceUnderCalendar < calendarHeight

    calendarRef.current.dataset.position = cannotPutCalendarOnBottom && canPutCalendarOnTop
      ? "top"
      : "bottom"
    console.log(calendarRef.current.dataset.position)
  }

  useLayoutEffect(() => {
    handleCalendarPosition()
    // const observer = new IntersectionObserver(([{ isIntersecting }]) => {
    //   if (isIntersecting || calendarRef.current === null) return

    //   handleCalendarPosition()
    // }, { threshold: 1 })

    // observer.observe(calendarRef.current)

    // return () => {
    //   observer.unobserve(calendarRef.current)
    // }
  }, [])

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
      data-position="bottom"
      className={styles.calendar}
    >
      {componentsTimeline[timeline]}
    </div>
  )
})

export default Calendar