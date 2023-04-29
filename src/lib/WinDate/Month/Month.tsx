import { useMemo } from "react"
import Header from "../Header/Header"
import Dates from "./Dates/Dates"
import { getDates } from "../../utils"
import Weekdays from "./Weekdays/Weekdays"
import type { DateProps } from "../WinDate"

const Month = ({ date, setDate }: DateProps) => {
  const dates = useMemo(() => {
    return getDates(date)
  }, [date])

  return (
    <div>
      <Header date={date} setDate={setDate} />
      <Weekdays />
      <Dates dates={dates} />
    </div>
  )
}

export default Month