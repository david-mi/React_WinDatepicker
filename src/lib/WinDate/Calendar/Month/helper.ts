import type { DatesFormat } from "./type"
import { formatDate } from "../../utils"

const daysToRetrieveBeforePreviousMonth = {
  0: 6,
  1: 0,
  2: 1,
  3: 2,
  4: 3,
  5: 4,
  6: 5
}

type DaysIndexKeys = keyof typeof daysToRetrieveBeforePreviousMonth

/**
 * Retrieve all 105 dates to display on a calendar page
 * 
 * - Add previous / current / next
 * - If the first day of the month from the {@link chosenDate} does not
 *   start with monday, add the last dates from the previous month to compensate
 * - Add all dates from the {@link chosenDate} month
 * - If the length of {@link monthDates} is below 105, add the first dates from the next month to compensate
 */

export function getDates(chosenDate: Date, minDate: Date, maxDate: Date | null): DatesFormat[] {
  /** make a copy of {@link chosenDate} to not mutate it */
  const date = new Date(chosenDate)

  const dates = []
  const firstDateOfTheMonth = 1
  const gridViewSize = 42
  const chosenMonth = date.getMonth()

  const previousMonthLastDate = new Date(date)
  previousMonthLastDate.setDate(0)
  const amountOfDaysFromPreviousMonth = previousMonthLastDate.getDate()

  const currentMonthLastDate = new Date(date)
  currentMonthLastDate.setMonth(currentMonthLastDate.getMonth() + 1)
  currentMonthLastDate.setDate(0)
  const amountOfDaysFromCurrentMonth = currentMonthLastDate.getDate()
  const currentMonthLastDay = currentMonthLastDate.getDay()

  date.setMonth(date.getMonth() - 1)
  date.setDate(firstDateOfTheMonth)
  const firstDayOfTheMonth = date.getDay()

  const amountOfDatesToGetBeforePreviousMonth = daysToRetrieveBeforePreviousMonth[firstDayOfTheMonth as DaysIndexKeys]
  date.setDate(firstDateOfTheMonth - amountOfDatesToGetBeforePreviousMonth)

  // needed grid size to display 3 months, with the first day of the month at the top
  const amountOfDatesToAdd = (
    amountOfDatesToGetBeforePreviousMonth +
    amountOfDaysFromPreviousMonth +
    amountOfDaysFromCurrentMonth +
    gridViewSize - currentMonthLastDay
  )

  let addedDatesCount = 0
  let dayDate: number

  while (addedDatesCount < amountOfDatesToAdd) {
    dayDate = date.getDate()

    dates.push({
      getDate: dayDate,
      getFormatedDate: formatDate(date),
      isFromChosenMonth: date.getMonth() === chosenMonth,
      isToday: areDatesIdentical(new Date(), date),
      isChosenDate: areDatesIdentical(chosenDate, date),
      isFirstDayOfCurrentMonth: date.getMonth() === chosenMonth && dayDate === 1,
      isOutOfMinOrMaxRange: isOutOfDateRange(date, minDate, maxDate)
    })

    date.setDate(dayDate + 1)
    addedDatesCount++
  }

  return dates
}

/**
 * Check if the passed date it outside of startDate or endDate range
 */

function isOutOfDateRange(date: Date, startDate: Date, endDate: Date | null) {
  const isDateOutOfMinRange = date < startDate
  const isDateOutOfMaxRange = endDate === null
    ? false
    : date > endDate

  return isDateOutOfMinRange || isDateOutOfMaxRange
}

/**
 * Checks if the passed date correspond to today
 */

export function areDatesIdentical(firstDate: Date, secondDate: Date) {
  const firstDateToString = new Date(firstDate).toDateString()
  const secondDateToString = new Date(secondDate).toDateString()
  return firstDateToString === secondDateToString
}