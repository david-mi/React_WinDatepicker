import { useMemo, useContext } from "react"
import { GlobalContext } from "../../../Context/Global"
import Header from "../Header/Header"
import Weekdays from "./Weekdays/Weekdays"
import Dates from "./Dates/Dates"
import { getDates } from "./helper"
import { monthsNamesIndexes, MonthIndex } from "./data"
import type { DatesFormat } from "./type"

const Month = () => {
  const { date, setDate } = useContext(GlobalContext)

  const dates: DatesFormat[] = useMemo(() => {
    return getDates(date)
  }, [date])

  const chosenMonth = date.getMonth()
  const chosenYear = date.getFullYear()

  function setNextMonth() {
    const nextMonth = new Date(date)
    nextMonth.setMonth(chosenMonth + 1)

    setDate(nextMonth)
  }

  const infos = `${monthsNamesIndexes[chosenMonth as MonthIndex]} ${chosenYear}`;

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
      <Dates
        dates={dates}
        setNextMonth={setNextMonth}
        setPreviousMonth={setPreviousMonth}
      />
    </div>
  )
}

export default Month