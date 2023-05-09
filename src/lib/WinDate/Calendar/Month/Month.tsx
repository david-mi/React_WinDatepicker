import { useMemo, useContext, useRef } from "react"
import { GlobalContext } from "../../../Context/Global"
import Header from "../Header/Header"
import Weekdays from "./Weekdays/Weekdays"
import Dates from "./Dates/Dates"
import { getDates } from "./helper"
import { monthsNamesIndexes, MonthIndex } from "./data"
import type { DatesFormat } from "./type"
import { handleTimeout } from "../../utils"

const Month = () => {
  const { date, setDate } = useContext(GlobalContext)
  const dates: DatesFormat[] = useMemo(() => getDates(date), [date])
  const dateContainerRef = useRef<HTMLDivElement>(null!)

  const chosenMonth = date.getMonth()
  const chosenYear = date.getFullYear()

  const handleNextMonth = handleTimeout({
    preTimeoutCallback: () => {
      dateContainerRef.current.scrollTo({
        top: dateContainerRef.current.scrollHeight,
        behavior: "smooth"
      })
    },
    timeoutCallback: setNextMonth,
    delay: 300
  })

  const handlePreviousMonth = handleTimeout({
    preTimeoutCallback: () => {
      const elementToScroll = dateContainerRef.current
      elementToScroll.scrollTo({ top: 0, behavior: "smooth" })
    },
    timeoutCallback: setPreviousMonth,
    delay: 300
  })

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
        handlePrevious={handlePreviousMonth}
        handleNext={handleNextMonth}
        infos={infos}
      />
      <Weekdays />
      <Dates dates={dates} ref={dateContainerRef} />
    </div>
  )
}

export default Month