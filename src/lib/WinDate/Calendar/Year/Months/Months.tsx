import { useContext, useRef, useLayoutEffect, MutableRefObject, UIEvent } from "react"
import { GlobalContext } from "../../../../Context/Global"
import type { MonthsFormat } from "../type"
import MonthButton from "./MonthButton/MonthButton"
import styles from "./months.module.css"

interface Props {
  months: MonthsFormat[]
  setPreviousYear: () => void
  setNextYear: () => void
  shouldDisablePreviousYear: boolean
  shouldDisableNextYear: boolean
  monthsContainerRef: MutableRefObject<HTMLDivElement>
}

const Months = (props: Props) => {
  const {
    months,
    setPreviousYear,
    setNextYear,
    shouldDisablePreviousYear,
    shouldDisableNextYear,
    monthsContainerRef
  }
    = props
  const { isSwitchingTimeline } = useContext(GlobalContext)
  const firstMonthOfChosenYearButtonRef = useRef<HTMLButtonElement>(null!)

  const className = `${styles.months} ${isSwitchingTimeline ? styles.switchTimeline : ""}`

  useLayoutEffect(() => {
    /** Each time year is changed, scroll monthsContainerRef at the top
    of first month of chosen year */

    scrollToTopOfCurrentYear()
  }, [months])

  function scrollToTopOfCurrentYear() {
    monthsContainerRef.current.scrollTop = firstMonthOfChosenYearButtonRef.current.offsetTop
  }

  /**
   * - If scroll reach bottom of monthsContainerRef, update months for the next year
   * - If scroll reach top monthsContainerRef, update months for the previous year
   * - Prevent scrolling down / up if months are out of range
   */

  function handleScroll(event: UIEvent<HTMLDivElement>) {
    const target = event.target as HTMLDivElement
    const { clientHeight, scrollTop, scrollHeight } = target
    const hasReachedTop = scrollTop === 0

    const isScrollingBelowFirstMonthOfChosenYearButton = scrollTop > firstMonthOfChosenYearButtonRef.current.offsetTop
    const isScrollingAboveFirstMonthOfChosenYearButton = !isScrollingBelowFirstMonthOfChosenYearButton
    const hasReachedBottom = clientHeight + Math.ceil(scrollTop) === scrollHeight

    if (
      isScrollingBelowFirstMonthOfChosenYearButton && shouldDisableNextYear ||
      isScrollingAboveFirstMonthOfChosenYearButton && shouldDisablePreviousYear
    ) {
      scrollToTopOfCurrentYear()
    }

    if (hasReachedTop) {
      setPreviousYear()
    }

    if (hasReachedBottom) {
      setNextYear()
    }
  }

  return (
    <div className={styles.wrapper}>
      <div className={className} ref={monthsContainerRef} onScroll={handleScroll}>
        {months.map((month, index) => {
          return (
            <MonthButton
              key={index}
              month={month}
              ref={month.isFirstMonthOfCurrentYear ? firstMonthOfChosenYearButtonRef : null}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Months