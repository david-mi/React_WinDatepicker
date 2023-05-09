import { useMemo, useContext, useRef } from "react"
import { GlobalContext } from "../../../Context/Global"
import Header from "../Header/Header"
import Weekdays from "./Weekdays/Weekdays"
import Dates from "./Dates/Dates"
import { getDates } from "./helper"
import { monthsNamesIndexes, MonthIndex } from "./data"
import type { DatesFormat } from "./type"

const Month = () => {
  const { date, setDate } = useContext(GlobalContext)
  const dates: DatesFormat[] = useMemo(() => getDates(date), [date])
  const dateContainerRef = useRef<HTMLDivElement>(null!)

  const chosenMonth = date.getMonth()
  const chosenYear = date.getFullYear()

  function scrollToTopOfDates() {
    dateContainerRef.current.scrollTo({ top: 0, behavior: "smooth" })
  }

  function scrollToBottomOfDates() {
    dateContainerRef.current.scrollTo({
      top: dateContainerRef.current.scrollHeight,
      behavior: "smooth"
    })
  }

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

  const infos = `${monthsNamesIndexes[chosenMonth as MonthIndex]} ${chosenYear}`;

  return (
    <div>
      <Header
        handlePrevious={scrollToTopOfDates}
        handleNext={scrollToBottomOfDates}
        infos={infos}
      />
      <Weekdays />
      <Dates
        dates={dates}
        ref={dateContainerRef}
        setPreviousMonth={setPreviousMonth}
        setNextMonth={setNextMonth}
      />
    </div>
  )
}

export default Month