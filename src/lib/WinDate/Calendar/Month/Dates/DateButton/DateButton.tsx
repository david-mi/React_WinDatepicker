import { useEffect, useRef, forwardRef, MutableRefObject, ForwardedRef } from "react"
import { useContext } from "react"
import { GlobalContext } from "../../../../../Context/Global"
import type { DatesFormat } from "../../type"
import styles from "./dateButton.module.css"

interface Props {
  date: DatesFormat
  setNextMonth: () => void
  setPreviousMonth: () => void
}

const DateButton = forwardRef(({ date, setNextMonth, setPreviousMonth }: Props, datesContainerRef: ForwardedRef<HTMLDivElement>) => {
  const {
    getDate,
    getFormatedDate,
    isFromChosenMonth,
    isToday,
    isChosenDate,
    isFromPreviousMonth,
    isFromNextMonth
  } = date

  const buttonRef = useRef<HTMLButtonElement>(null!)

  const { setDate, closeCalendar } = useContext(GlobalContext)

  /** Update date state with clicked date from calendar */

  function handleDateClick() {
    const newDate = new Date(getFormatedDate)
    setDate(newDate)
    closeCalendar()
  }

  useEffect(() => {
    if (getDate !== 1 || isFromPreviousMonth === false) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting === false) return

        if (entry.rootBounds!.top < entry.boundingClientRect.top) {
          setPreviousMonth()
        }
      })
    }, { threshold: 1 })

    if (buttonRef.current) {
      observer.observe(buttonRef.current)
    }

    return () => {
      if (buttonRef.current) {
        observer.unobserve(buttonRef.current)
      }
    }
  }, [date])

  useEffect(() => {
    if (getDate !== 1 || isFromNextMonth === false) return

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting === true) return
        console.log(entry)
        if (entry.rootBounds!.top > entry.boundingClientRect.top) {
          setNextMonth()
        }
      })
    }, { threshold: 1, root: (datesContainerRef as MutableRefObject<HTMLDivElement>).current })

    if (buttonRef.current) {
      observer.observe(buttonRef.current)
    }

    return () => {
      if (buttonRef.current) {
        observer.unobserve(buttonRef.current)
      }
    }
  }, [date])


  return (
    <button
      ref={buttonRef}
      data-testid="date"
      data-today={isToday}
      data-chosen-month={isFromChosenMonth}
      data-chosen-date={isChosenDate}
      className={styles.date}
      onClick={handleDateClick}
      autoFocus={isChosenDate}
    >
      {getDate}
    </button>
  )
})

export default DateButton