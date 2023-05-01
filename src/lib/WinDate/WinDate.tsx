import { useContext } from "react"
import { GlobalContext } from "../Context/Global"
import Calendar from "./Calendar/Calendar"
import DateInput from "./DateInput/DateInput"
import styles from "./winDate.module.css"

const Windate = () => {
  const { isCalendarOpen } = useContext(GlobalContext)

  return (
    <div className={styles.winDate}>
      {isCalendarOpen && <Calendar />}
      <DateInput />
    </div>
  )
}

export default Windate