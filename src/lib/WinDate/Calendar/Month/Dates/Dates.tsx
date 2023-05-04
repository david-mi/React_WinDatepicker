import { useEffect, useRef } from "react"
import DateButton from "./DateButton/DateButton"
import type { DatesFormat } from "../type"
import styles from "./dates.module.css"

interface Props {
  dates: DatesFormat[]
  setNextMonth: () => void
  setPreviousMonth: () => void
}

const Dates = ({ dates, setNextMonth, setPreviousMonth }: Props) => {
  const endDivRef = useRef<HTMLDivElement>(null!)
  const datesContainerRef = useRef<HTMLDivElement>(null!)
  const scrollUpdateRef = useRef(false)

  useEffect(() => {
    if (scrollUpdateRef.current === false) {
      const elementToScroll = datesContainerRef.current.querySelector<HTMLButtonElement>("[data-chosen-month='true']")!
      datesContainerRef.current.scrollTop = elementToScroll.offsetTop
    }

    scrollUpdateRef.current = false
  }, [dates])

  return (
    <div className={styles.dates} ref={datesContainerRef} id="dates">
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
      <div ref={endDivRef}>end</div>
    </div>
  )
}
export default Dates