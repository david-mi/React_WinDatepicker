import { useMemo, useContext } from "react"
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

  const dates: DatesFormat[] = useMemo(() => {
    return getDates(date)
  }, [date])


  const chosenMonth = date.getMonth()
  const chosenYear = date.getFullYear()


  const handleNextMonth = handleTimeout({
    preTimeoutCallback: () => {
      const elementToScroll = document.querySelector<HTMLButtonElement>("[data-next-month-first-day='true']")!
      elementToScroll.scrollIntoView({ behavior: "smooth" })
    },
    timeoutCallback: setNextMonth,
    delay: 200
  })

  const handlePreviousMonth = handleTimeout({
    preTimeoutCallback: () => {
      const elementToScroll = document.getElementById("dates")!
      elementToScroll.scrollTo({ top: 0, behavior: "smooth" })
    },
    timeoutCallback: setPreviousMonth,
    delay: 200
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
      <Dates dates={dates} />
    </div>
  )
}

export default Month