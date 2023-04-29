import { useState } from "react"
import styles from "./winDate.module.css"
import Month from "./Month/Month"
import type { SetStateAction, Dispatch } from "react"

export interface DateProps {
  date: Date
  setDate: Dispatch<SetStateAction<Date>>
}

const WinDate = () => {
  const [date, setDate] = useState(new Date())

  return (
    <div className={styles.container}>
      <Month date={date} setDate={setDate} />
    </div>
  )
}

export default WinDate