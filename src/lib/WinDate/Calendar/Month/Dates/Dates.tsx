import { useRef, useEffect } from "react"
import { useContext } from "react"
import { GlobalContext } from "../../../../Context/Global"
import DateButton from "./DateButton/DateButton"
import type { DatesFormat } from "../type"
import styles from "./dates.module.css"

interface Props {
  dates: DatesFormat[]
}

const Dates = ({ dates }: Props) => {
  const { isSwitchingTimeline } = useContext(GlobalContext)
  const datesContainerRef = useRef<HTMLDivElement>(null!)

  const className = `${styles.dates} ${isSwitchingTimeline ? styles.switchTimeline : ""}`

  useEffect(() => {
    const elementToScroll = datesContainerRef.current.querySelector<HTMLButtonElement>("[data-chosen-month='true']")!
    datesContainerRef.current.scrollTo({ top: elementToScroll.offsetTop })
  }, [dates])

  return (
    <div className={className} ref={datesContainerRef} id="dates">
      {dates.map((date, index) => {
        return <DateButton key={index} date={date} />
      })}
    </div>
  )
}

export default Dates