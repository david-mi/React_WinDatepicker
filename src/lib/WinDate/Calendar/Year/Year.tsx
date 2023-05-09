import { useMemo, useContext, useRef } from "react"
import { GlobalContext } from "../../../Context/Global"
import Header from "../Header/Header"
import Month from "./Months/Months"
import { getMonths } from "./helper"
import type { MonthsFormat } from "./type"

const Year = () => {
  const { date, setDate } = useContext(GlobalContext)
  const months: MonthsFormat[] = useMemo(() => getMonths(date), [date])
  const monthsContainerRef = useRef<HTMLDivElement>(null!)

  const chosenYear = date.getFullYear()
  const infos = String(chosenYear)

  function scrollToTopOfMonths() {
    monthsContainerRef.current.scrollTo({ top: 0, behavior: "smooth" })
  }

  function scrollToBottomOfMonths() {
    monthsContainerRef.current.scrollTo({
      top: monthsContainerRef.current.scrollHeight,
      behavior: "smooth"
    })
  }

  function setNextYear() {
    const nextMonth = new Date(date)
    nextMonth.setFullYear(chosenYear + 1)

    setDate(nextMonth)
  }

  function setPreviousYear() {
    const previousMonth = new Date(date)
    previousMonth.setFullYear(chosenYear - 1)

    setDate(previousMonth)
  }

  return (
    <div>
      <Header
        handlePrevious={scrollToTopOfMonths}
        handleNext={scrollToBottomOfMonths}
        infos={infos}
      />
      <Month
        months={months}
        ref={monthsContainerRef}
        setNextYear={setNextYear}
        setPreviousYear={setPreviousYear}
      />
    </div>
  )
}

export default Year