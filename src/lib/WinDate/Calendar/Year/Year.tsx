import { useMemo, useContext } from "react"
import { GlobalContext } from "../../../Context/Global"
import Header from "../Header/Header"
import Month from "./Months/Months"
import { getMonths } from "./helper"
import type { MonthsFormat } from "./type"

const Year = () => {
  const { date, setDate } = useContext(GlobalContext)

  const months: MonthsFormat[] = useMemo(() => {
    return getMonths(date)
  }, [date])

  const chosenYear = date.getFullYear()
  const infos = String(chosenYear)

  function setNextYear() {
    const nextMonth = new Date(date)
    nextMonth.setFullYear(chosenYear + 1)

    setDate(nextMonth)
  }

  function setPreviousMonth() {
    const previousMonth = new Date(date)
    previousMonth.setFullYear(chosenYear - 1)

    setDate(previousMonth)
  }

  return (
    <div>
      <Header
        handlePrevious={setPreviousMonth}
        handleNext={setNextYear}
        infos={infos}
      />
      <Month months={months} />
    </div>
  )
}

export default Year