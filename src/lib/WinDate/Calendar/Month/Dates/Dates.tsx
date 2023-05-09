import { useRef, useEffect, forwardRef, ForwardedRef, MutableRefObject } from "react"
import { useContext } from "react"
import { GlobalContext } from "../../../../Context/Global"
import DateButton from "./DateButton/DateButton"
import type { DatesFormat } from "../type"
import styles from "./dates.module.css"

interface Props {
  dates: DatesFormat[]
}

const Dates = forwardRef(({ dates }: Props, dateContainerRef: ForwardedRef<HTMLDivElement>) => {
  const { isSwitchingTimeline } = useContext(GlobalContext)
  const firstDayOfChosenMonthButtonRef = useRef<HTMLButtonElement>(null!)

  const className = `${styles.dates} ${isSwitchingTimeline ? styles.switchTimeline : ""}`

  useEffect(() => {
    (dateContainerRef as MutableRefObject<HTMLDivElement>).current.scrollTop = firstDayOfChosenMonthButtonRef.current.offsetTop
  }, [dates])

  return (
    <div className={className} ref={dateContainerRef}>
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
  )
})

export default Dates