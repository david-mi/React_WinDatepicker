import { useRef, useLayoutEffect, MutableRefObject, UIEvent, useContext } from "react"
import { GlobalContext } from "../../../../Context/Global"
import DateButton from "./DateButton/DateButton"
import type { DatesFormat } from "../type"
import styles from "./dates.module.css"

interface Props {
  dates: DatesFormat[]
  setPreviousMonth: () => void
  setNextMonth: () => void
  shouldDisablePreviousMonth: boolean
  shouldDisableNextMonth: boolean
  datesContainerRef: MutableRefObject<HTMLDivElement>
}

const Dates = (props: Props) => {
  const {
    dates,
    setPreviousMonth,
    setNextMonth,
    shouldDisableNextMonth,
    shouldDisablePreviousMonth,
    datesContainerRef
  } = props
  const { isSwitchingTimeline } = useContext(GlobalContext)
  const firstDayOfChosenMonthButtonRef = useRef<HTMLButtonElement>(null!)

  const className = `${styles.dates} ${isSwitchingTimeline ? styles.switchTimeline : ""}`

  useLayoutEffect(() => {
    /** Each time month is changed, scroll datesContainerRef at the top
    of first day of chosen month */
    scrollToTopOfCurrentMonth()
  }, [dates])

  function scrollToTopOfCurrentMonth() {
    datesContainerRef.current.scrollTop = firstDayOfChosenMonthButtonRef.current.offsetTop
  }

  /**
   * - If scroll reach bottom datesContainerRef, update dates for the next month
   * - If scroll reach top datesContainerRef, update dates for the previous month
   * - Prevent scrolling down / up if dates are out of range
   */

  function handleScroll(event: UIEvent<HTMLDivElement>) {
    const target = event.target as HTMLDivElement
    const { clientHeight, scrollTop, scrollHeight } = target

    const isScrollingBelowFirstDayOfChosenMonthButton = scrollTop > firstDayOfChosenMonthButtonRef.current.offsetTop
    const isScrollingAboveFirstDayOfChosenMonthButton = !isScrollingBelowFirstDayOfChosenMonthButton
    const hasReachedTop = scrollTop === 0
    const hasReachedBottom = clientHeight + Math.ceil(scrollTop) === scrollHeight

    if (
      isScrollingBelowFirstDayOfChosenMonthButton && shouldDisableNextMonth ||
      isScrollingAboveFirstDayOfChosenMonthButton && shouldDisablePreviousMonth
    ) {
      scrollToTopOfCurrentMonth()
    }

    if (hasReachedTop) {
      setPreviousMonth()
    }

    if (hasReachedBottom) {
      setNextMonth()
    }
  }

  return (
    <div className={styles.wrapper}>
      <div onScroll={handleScroll} ref={datesContainerRef} className={className}>
        {dates.map((date, index) => {
          return (
            <DateButton
              key={index}
              date={date}
              ref={date.isFirstDayOfCurrentMonth ? firstDayOfChosenMonthButtonRef : null}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Dates