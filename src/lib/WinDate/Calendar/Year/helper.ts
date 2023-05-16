import type { MonthsFormat } from "./type"
import { formatDate } from "../../utils"
import { monthAbbrev } from "../../../langs"

/**
 * Retrieve all 16 months to display on a calendar page
 * 
 * - Add all months from the {@link yearMonths} month
 * - Add the first 4 months from the next year
 */

export function getMonths(chosenDate: Date): MonthsFormat[] {
  /** make a copy of {@link chosenDate} to not mutate it */
  const date = new Date(chosenDate)

  const months = []
  const amountOfYearsToReturn = 3 * 16
  const firstMonthOfTheYear = 0
  const chosenYear = date.getFullYear()

  date.setFullYear(chosenYear - 1)
  date.setMonth(firstMonthOfTheYear)

  let month: number

  for (let i = 0; i < amountOfYearsToReturn; i++) {
    month = date.getMonth()
    months.push({
      getMonthAbbrev: monthAbbrev[i % monthAbbrev.length],
      getFormatedDate: formatDate(date),
      isFromChosenYear: date.getFullYear() === chosenYear,
      isCurrentMonth: areMonthsIdentical(new Date(), date),
      isChosenMonth: areMonthsIdentical(chosenDate, date),
      isFirstMonthOfCurrentYear: date.getFullYear() === chosenYear && date.getMonth() === 0
    })

    date.setMonth(month + 1)
  }

  return months
}

/**
/**
 * Checks if months from firstDate and secondDate are identicals and from the same year
 */

export function areMonthsIdentical(firstDate: Date, secondDate: Date | null) {
  if (secondDate === null) return false

  const firstDateMonth = firstDate.getMonth()
  const firstDateYear = firstDate.getFullYear()

  const secondDateMonth = secondDate.getMonth()
  const secondDateYear = secondDate.getFullYear()

  return (
    firstDateMonth === secondDateMonth &&
    firstDateYear === secondDateYear
  )
}