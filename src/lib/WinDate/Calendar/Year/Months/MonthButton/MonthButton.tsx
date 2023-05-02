import { useContext } from "react"
import { GlobalContext } from "../../../../../Context/Global"
import type { MonthsFormat } from "../../type"
import styles from "./monthButton.module.css"

interface Props {
  month: MonthsFormat
}

const MonthButton = ({ month }: Props) => {
  const {
    getMonthAbbrev,
    getFormatedDate,
    isFromChosenYear,
    isCurrentMonth,
    isChosenMonth
  } = month

  const { setDate, closeCalendar } = useContext(GlobalContext)

  /** Update date state with clicked month from calendar */

  function handleMonthClick() {
    const newDate = new Date(getFormatedDate)
    setDate(newDate)
    closeCalendar()
  }

  return (
    <button
      data-testid="date"
      data-current-month={isCurrentMonth}
      data-chosen-year={isFromChosenYear}
      data-chosen-month={isChosenMonth}
      className={styles.month}
      onClick={handleMonthClick}
    >
      {getMonthAbbrev}
    </button>
  )
}

export default MonthButton