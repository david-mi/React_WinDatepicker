import Calendar from "./Calendar/Calendar"
import DateInput from "./DateInput/DateInput"
import styles from "./winDate.module.css"

const Windate = () => {
  return (
    <div className={styles.winDate}>
      <Calendar />
      <DateInput />
    </div>
  )
}

export default Windate