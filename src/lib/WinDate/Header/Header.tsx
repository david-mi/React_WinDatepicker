import Infos from "./Infos/Infos"
import Next from "./Next/Next"
import Previous from "./Previous/Previous"
import styles from "./header.module.css"
import type { DateProps } from "../WinDate"

const monthsString = {
  0: 'Janvier',
  1: 'Février',
  2: 'Mars',
  3: 'Avril',
  4: 'Mai',
  5: 'Juin',
  6: 'Juillet',
  7: 'Août',
  8: 'Septembre',
  9: 'Octobre',
  10: 'Novembre',
  11: 'Décembre'
};

type MonthIndex = keyof typeof monthsString


const Header = ({ date, setDate }: DateProps) => {
  const currentMonth = date.getMonth()
  const currentYear = date.getFullYear()

  function setNextMonth() {
    const nextMonth = new Date(date)
    nextMonth.setMonth(currentMonth + 1)

    setDate(nextMonth)
  }

  function setPreviousMonth() {
    const previousMonth = new Date(date)
    previousMonth.setMonth(currentMonth - 1)

    setDate(previousMonth)
  }


  return (
    <header className={styles.header}>
      <Infos>
        <span>{monthsString[currentMonth as MonthIndex]}</span>
        <span>{currentYear}</span>
      </Infos>
      <Previous handler={setPreviousMonth} />
      <Next handler={setNextMonth} />
    </header>
  )
}

export default Header