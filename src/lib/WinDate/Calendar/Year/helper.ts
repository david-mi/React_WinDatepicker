import type { MonthsFormat } from "./type"

const monthAbbrev = ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."]

/**
 * Retrieve all 16 months to display on a calendar page
 * 
 * - Add all months from the {@link yearMonths} month
 * - Add the first 4 months from the next year
 */

export function getMonths(chosenDate: Date): MonthsFormat[] {
  /** make a copy of {@link chosenDate} to not mutate it */
  const date = new Date(chosenDate)

  const yearMonths = []
  const amountOfYearsToReturn = 16
  const firstMonthOfTheYear = 0
  const chosenYear = date.getFullYear()

  date.setMonth(firstMonthOfTheYear)

  let month: number

  for (let i = 0; i < amountOfYearsToReturn; i++) {
    month = date.getMonth()
    yearMonths.push({
      getMonthAbbrev: monthAbbrev[i % monthAbbrev.length],
      getFormatedDate: formatDate(date),
      isFromChosenYear: date.getFullYear() === chosenYear,
      isCurrentMonth: areMonthsIdentical(new Date(), date),
      isChosenMonth: areMonthsIdentical(chosenDate, date),
    })

    date.setMonth(month + 1)
  }

  return yearMonths
}

/**
 * Format any date to a YYYY-MM-DD string format
 */

export function formatDate(date: Date): string {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, "0")
  const day = String(date.getDate()).padStart(2, "0")

  return `${year}-${month}-${day}`
}

/**
 * Checks if the passed date correspond to today
 */

export function areMonthsIdentical(firstDate: Date, secondDate: Date) {
  const firstDateMonth = firstDate.getMonth()
  const firstDateYear = firstDate.getFullYear()

  const secondDateMonth = secondDate.getMonth()
  const secondDateYear = secondDate.getFullYear()

  return (
    firstDateMonth === secondDateMonth &&
    firstDateYear === secondDateYear
  )
}