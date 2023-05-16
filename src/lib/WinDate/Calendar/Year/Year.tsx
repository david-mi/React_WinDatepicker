import { useMemo, useContext, useRef } from "react"
import { GlobalContext } from "../../../Context/Global"
import Header from "../Header/Header"
import Months from "./Months/Months"
import { getMonths, checkIfYearsAreIdentical } from "./helper"
import type { MonthsFormat } from "./type"

const Year = () => {
  const { date, setDate, minDate, maxDate } = useContext(GlobalContext)
  const months: MonthsFormat[] = useMemo(() => getMonths(date, minDate, maxDate), [date])
  const monthsContainerRef = useRef<HTMLDivElement>(null!)

  const chosenYear = date.getFullYear()
  const headerText = String(chosenYear).padStart(4, "0")
  const shouldDisablePreviousYear = checkIfYearsAreIdentical(date, minDate)
  const shouldDisableNextYear = checkIfYearsAreIdentical(date, maxDate)

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
        shouldDisablePrevious={shouldDisablePreviousYear}
        shouldDisableNext={shouldDisableNextYear}
        infos={headerText}
      />
      <Months
        months={months}
        monthsContainerRef={monthsContainerRef}
        shouldDisablePreviousYear={shouldDisablePreviousYear}
        shouldDisableNextYear={shouldDisableNextYear}
        setPreviousYear={setPreviousYear}
        setNextYear={setNextYear}
      />
    </div>
  )
}

export default Year