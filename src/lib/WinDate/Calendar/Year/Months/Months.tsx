import { useContext, forwardRef, useRef, ForwardedRef, useLayoutEffect, MutableRefObject, UIEvent } from "react"
import { GlobalContext } from "../../../../Context/Global"
import type { MonthsFormat } from "../type"
import MonthButton from "./MonthButton/MonthButton"
import styles from "./months.module.css"

interface Props {
  months: MonthsFormat[]
  setNextYear: () => void
  setPreviousYear: () => void
}

const Months = forwardRef(({ months, setNextYear, setPreviousYear }: Props, monthsContainerRef: ForwardedRef<HTMLDivElement>) => {
  const { isSwitchingTimeline } = useContext(GlobalContext)
  const firstMonthOfChosenYearButtonRef = useRef<HTMLButtonElement>(null!)

  const className = `${styles.months} ${isSwitchingTimeline ? styles.switchTimeline : ""}`

  useLayoutEffect(() => {
    (monthsContainerRef as MutableRefObject<HTMLDivElement>).current.scrollTop = firstMonthOfChosenYearButtonRef.current.offsetTop
  }, [months])

  function handleScroll(event: UIEvent<HTMLDivElement>) {
    const target = event.target as HTMLDivElement
    const { clientHeight, scrollTop, scrollHeight } = target
    const hasReachedTop = scrollTop === 0
    const hasReachedBottom = clientHeight + scrollTop === scrollHeight

    if (hasReachedTop) {
      setPreviousYear()
    }

    if (hasReachedBottom) {
      setNextYear()
    }
  }

  return (
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
  )
})

export default Months