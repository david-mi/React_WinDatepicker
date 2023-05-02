import type { MonthsFormat } from "../type"
import MonthButton from "./MonthButton/MonthButton"
import styles from "./months.module.css"

interface Props {
  months: MonthsFormat[]
}

const Months = ({ months }: Props) => {
  return (
    <div className={styles.months}>
      {months.map((month, index) => {
        return <MonthButton key={index} month={month} />
      })}
    </div>
  )
}
export default Months