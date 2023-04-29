import styles from "./weekDays.module.css"

const weekDaysArr = ["lu", "ma", "me", "je", "ve", "sa", "di"]

const Weekdays = () => {
  return (
    <div className={styles.weekDays}>
      {weekDaysArr.map((weekDay) => {
        return <span key={weekDay}>{weekDay}</span>
      })}
    </div>
  )
}
export default Weekdays