import type { DatesFormat } from "./type"
import { formatDate } from "../../utils"

const getDayIndex = {
  0: 6,
  1: 0,
  2: 1,
  3: 2,
  4: 3,
  5: 4,
  6: 5
}

type DaysIndexKeys = keyof typeof getDayIndex

/**
 * Retrieve all 42 dates to display on a calendar page
 * 
 * - If the first day of the month from the {@link chosenDate} does not
 *   start with monday, add the last dates from the previous month to compensate
 * - Add all dates from the {@link chosenDate} month
 * - If the length of {@link monthDates} is below 42, add the first dates from the next month to compensate
 */

export function getDates(chosenDate: Date): DatesFormat[] {
  /** make a copy of {@link chosenDate} to not mutate it */
  const date = new Date(chosenDate)

  const monthDates = []
  const firstDateOfTheMonth = 1
  const chosenMonth = date.getMonth()

  const previousMonth = new Date(date)
  previousMonth.setMonth(chosenMonth - 1)

  const nextMonth = new Date(date)
  nextMonth.setMonth(chosenMonth + 1)

  const monthToStop = new Date(nextMonth)
  monthToStop.setMonth(date.getMonth() + 3)

  const monthToStart = new Date(date)
  monthToStart.setMonth(date.getMonth() - 2)
  const yearToStart = monthToStart.getFullYear()

  const afterNextMonth = new Date(date);
  afterNextMonth.setMonth(date.getMonth() + 2);

  date.setFullYear(yearToStart)
  date.setMonth(monthToStart.getMonth())
  date.setDate(firstDateOfTheMonth)
  const firstDayOfTheMonth = date.getDay()

  const amountOfDatesToGetFromPreviousMonth = getDayIndex[firstDayOfTheMonth as DaysIndexKeys]
  date.setDate(firstDateOfTheMonth - amountOfDatesToGetFromPreviousMonth)


  let dayDate: number

  while (date.getMonth() !== monthToStop.getMonth()) {
    dayDate = date.getDate()
    monthDates.push({
      getDate: dayDate,
      getFormatedDate: formatDate(date),
      isFromChosenMonth: date.getMonth() === chosenMonth,
      isFromNextMonth: date.getMonth() === nextMonth.getMonth(),
      isFromPreviousMonth: date.getMonth() === previousMonth.getMonth(),
      isToday: areDatesIdentical(new Date(), date),
      isChosenDate: areDatesIdentical(chosenDate, date),
    })
    date.setDate(dayDate + 1)
  }

  return monthDates
}

/**
 * Checks if the passed date correspond to today
 */

export function areDatesIdentical(firstDate: Date, secondDate: Date) {
  const firstDateToString = new Date(firstDate).toDateString()
  const secondDateToString = new Date(secondDate).toDateString()
  return firstDateToString === secondDateToString
}