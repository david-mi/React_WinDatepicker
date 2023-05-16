import type { MonthsFormat } from "./type"
import { formatDate } from "../../utils"
import { monthAbbrev } from "../../../langs"

/**
 * Retrieve all 16 months to display on a calendar page
 * 
 * - Add all months from the {@link yearMonths} month
 * - Add the first 4 months from the next year
 */

export function getMonths(chosenDate: Date, minDate: Date, maxDate: Date | null): MonthsFormat[] {
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
      isFirstMonthOfCurrentYear: date.getFullYear() === chosenYear && date.getMonth() === 0,
      isOutsideMonthRange: checkIfOutsideMonthRange(date, minDate, maxDate)
    })

    date.setMonth(month + 1)
  }

  return months
}

/**
 * Check if the passed monthDate it outside of startMonthDate or endDate range, comparing months
 */

export function checkIfOutsideMonthRange(monthDate: Date, startMonthDate: Date, endDate: Date | null) {
  const monthDateReset = new Date(monthDate)
  monthDateReset.setDate(1)
  monthDateReset.setHours(0, 0, 0, 0)

  const startMonthDateReset = new Date(startMonthDate)
  startMonthDateReset.setDate(1)
  startMonthDateReset.setHours(0, 0, 0, 0)

  let endMonthDateReset = null

  if (endDate !== null) {
    endMonthDateReset = new Date(endDate)
    endMonthDateReset.setDate(1)
    endMonthDateReset.setHours(0, 0, 0, 0)
  }

  const isDateOutOfMinRange = monthDateReset < startMonthDateReset
  const isDateOutOfMaxRange = endMonthDateReset === null
    ? false
    : monthDateReset > endMonthDateReset

  return isDateOutOfMinRange || isDateOutOfMaxRange
}

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

/**
 * Checks if years from firstDate and secondDate are identicals
 */

export function areYearsIdentical(firstDate: Date, secondDate: Date | null) {
  if (secondDate === null) return false

  const firstDateYear = firstDate.getFullYear()
  const secondDateYear = secondDate.getFullYear()

  return firstDateYear === secondDateYear
}