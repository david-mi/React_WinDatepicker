import { useContext } from "react"
import { GlobalContext } from "../../../../Context/Global"
import type { MonthsFormat } from "../type"
import MonthButton from "./MonthButton/MonthButton"
import styles from "./months.module.css"

interface Props {
  months: MonthsFormat[]
}

const Months = ({ months }: Props) => {
  const { isSwitchingTimeline } = useContext(GlobalContext)

  const className = `${styles.months} ${isSwitchingTimeline ? styles.switchTimeline : ""}`

  return (
    <div className={className}>
      {months.map((month, index) => {
        return <MonthButton key={index} month={month} />
      })}
    </div>
  )
}

export default Months