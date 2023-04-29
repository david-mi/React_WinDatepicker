const daysToGetFromPreviousMonth = {
  0: 6,
  1: 0,
  2: 1,
  3: 2,
  4: 3,
  5: 4,
  6: 5
}

type DaysKeys = keyof typeof daysToGetFromPreviousMonth

export function getDates(date: Date) {
  const dateCopy = new Date(date)
  const requiredDatesAmount = 42
  const monthDates = []

  dateCopy.setDate(1)
  let dayDate = 1

  const previousMonthLastDay = new Date(date)
  previousMonthLastDay.setDate(0)

  let daysFromPrevMonth = daysToGetFromPreviousMonth[dateCopy.getDay() as DaysKeys]

  while (daysFromPrevMonth > 0) {
    const previousMonthDate = previousMonthLastDay.getDate()
    monthDates.unshift(previousMonthDate)
    previousMonthLastDay.setDate(previousMonthDate - 1)
    daysFromPrevMonth--
  }

  while (monthDates.length !== requiredDatesAmount) {
    monthDates.push(dayDate)
    dateCopy.setDate(dayDate + 1)
    dayDate = dateCopy.getDate()
  }

  return monthDates
}