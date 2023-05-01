import { useMemo } from "react"
import Header from "../Header/Header"
import Weekdays from "./Weekdays/Weekdays"
import Dates from "./Dates/Dates"
import { getDates } from "./helper"
import { monthsAbbrev, MonthIndex } from "./data"
import type { DateProps } from "../WinDate"
import type { MonthDateFormat } from "./type"

const Month = ({ date, setDate }: DateProps) => {
  const dates: MonthDateFormat[] = useMemo(() => {
    return getDates(date)
  }, [date])

  const chosenMonth = date.getMonth()
  const chosenYear = date.getFullYear()

  const infos = `${monthsAbbrev[chosenMonth as MonthIndex]} ${chosenYear}`

  function setNextMonth() {
    const nextMonth = new Date(date)
    nextMonth.setMonth(chosenMonth + 1)

    setDate(nextMonth)
  }

  function setPreviousMonth() {
    const previousMonth = new Date(date)
    previousMonth.setMonth(chosenMonth - 1)

    setDate(previousMonth)
  }

  return (
    <div>
      <Header
        handlePrevious={setPreviousMonth}
        handleNext={setNextMonth}
        infos={infos}
      />
      <Weekdays />
      <Dates dates={dates} />
    </div>
  )
}

export default Month