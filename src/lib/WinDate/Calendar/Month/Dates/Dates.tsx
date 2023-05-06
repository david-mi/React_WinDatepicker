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

  const className = `${styles.dates} ${isSwitchingTimeline ? styles.switchTimeline : ""}`

  return (
    <div className={className}>
      {dates.map((date, index) => {
        return <DateButton key={index} date={date} />
      })}
    </div>
  )
}

export default Dates