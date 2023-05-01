import Calendar from "./Calendar/Calendar"
import { useState } from "react"
import type { SetStateAction, Dispatch } from "react"
import styles from "./winDate.module.css"

export interface DateProps {
  date: Date
  setDate: Dispatch<SetStateAction<Date>>
}

const Windate = () => {
  const [date, setDate] = useState(new Date())

  return (
    <div className={styles.winDate}>
      <Calendar date={date} setDate={setDate} />
    </div>
  )
}
export default Windate