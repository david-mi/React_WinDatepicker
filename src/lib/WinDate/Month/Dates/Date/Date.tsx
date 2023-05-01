import type { MonthDateFormat } from "../../type"
import styles from "./date.module.css"

interface Props {
  date: MonthDateFormat
}

const Date = ({ date }: Props) => {
  const { getDate, getFormatedDate, isFromChosenMonth, isToday } = date

  /** Create classNames based on props values */

  function handleClassNames() {
    let className = styles.date

    if (isToday) {
      className += ` ${styles.today}`
    }

    if (isFromChosenMonth) {
      className += ` ${styles.chosenMonth}`
    }

    return className
  }

  function handleDateClick() {
    console.info(getFormatedDate)
  }

  return (
    <button className={handleClassNames()} onClick={handleDateClick}>
      {getDate}
    </button>
  )
}

export default Date