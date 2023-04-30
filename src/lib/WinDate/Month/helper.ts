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
 * 
 * @returns array of dates
 */

export function getDates(chosenDate: Date): number[] {
  /** make a copy of {@link chosenDate} to not mutate it */
  const date = new Date(chosenDate)

  const monthDates = []
  const amountOfDatesToReturn = 42
  const firstDateOfTheMonth = 1

  date.setDate(firstDateOfTheMonth)
  const firstDayOfTheMonth = date.getDay()

  const amountOfDatesToGetFromPreviousMonth = getDayIndex[firstDayOfTheMonth as DaysIndexKeys]
  date.setDate(firstDateOfTheMonth - amountOfDatesToGetFromPreviousMonth)

  let dayDate: number

  while (monthDates.length !== amountOfDatesToReturn) {
    dayDate = date.getDate()
    monthDates.push(dayDate)
    date.setDate(dayDate + 1)
  }

  return monthDates
}