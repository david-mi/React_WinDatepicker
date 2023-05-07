import { useEffect, useRef } from "react"
import { useContext } from "react"
import { GlobalContext } from "../../../../Context/Global"
import DateButton from "./DateButton/DateButton"
import type { DatesFormat } from "../type"
import styles from "./dates.module.css"

interface Props {
  dates: DatesFormat[]
  setNextMonth: () => void
  setPreviousMonth: () => void
}

const Dates = ({ dates, setNextMonth, setPreviousMonth }: Props) => {
  const { isSwitchingTimeline } = useContext(GlobalContext)
  const datesContainerRef = useRef<HTMLDivElement>(null!)

  useEffect(() => {
    const elementToScroll = datesContainerRef.current.querySelector<HTMLButtonElement>("[data-chosen-month='true']")!
    datesContainerRef.current.scrollTop = elementToScroll.offsetTop
    datesContainerRef.current.scrollTo({ top: elementToScroll.offsetTop, behavior: "smooth" })
  }, [dates])


  const className = `${styles.dates} ${isSwitchingTimeline ? styles.switchTimeline : ""}`

  return (
    <div className={className} ref={datesContainerRef} id="dates">
      {dates.map((date, index) => {
        return (
          <DateButton
            key={index}
            date={date}
            ref={datesContainerRef}
            setNextMonth={setNextMonth}
            setPreviousMonth={setPreviousMonth}
          />
        )
      })}
    </div>
  )
}

export default Dates