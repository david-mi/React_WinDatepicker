import { useMemo, useContext, useRef } from "react"
import { GlobalContext } from "../../../Context/Global"
import Header from "../Header/Header"
import Weekdays from "./Weekdays/Weekdays"
import Dates from "./Dates/Dates"
import { getDates } from "./helper"
import { areMonthsIdentical } from "../Year/helper"
import { monthsNamesIndexes, MonthIndex } from "../../../langs"
import type { DatesFormat } from "./type"

const Month = () => {
  const { date, setDate, minDate, maxDate } = useContext(GlobalContext)
  const dates: DatesFormat[] = useMemo(() => getDates(date, minDate, maxDate), [date])
  const datesContainerRef = useRef<HTMLDivElement>(null!)

  const chosenMonth = date.getMonth()
  const chosenYear = date.getFullYear()

  function scrollToTopOfDates() {
    datesContainerRef.current.scrollTo({ top: 0, behavior: "smooth" })
  }

  function scrollToBottomOfDates() {
    datesContainerRef.current.scrollTo({
      top: datesContainerRef.current.scrollHeight,
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

  const infos = `${monthsNamesIndexes[chosenMonth as MonthIndex]} ${String(chosenYear).padStart(4, "0")}`;
  const shouldDisablePreviousMonth = areMonthsIdentical(date, minDate)
  const shouldDisableNextMonth = areMonthsIdentical(date, maxDate)

  return (
    <div>
      <Header
        handlePrevious={scrollToTopOfDates}
        shouldDisablePrevious={shouldDisablePreviousMonth}
        shouldDisableNext={shouldDisableNextMonth}
        handleNext={scrollToBottomOfDates}
        infos={infos}
      />
      <Weekdays />
      <Dates
        dates={dates}
        ref={datesContainerRef}
        setPreviousMonth={setPreviousMonth}
        setNextMonth={setNextMonth}
      />
    </div>
  )
}

export default Month