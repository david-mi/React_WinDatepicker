import { expect } from "vitest";
import { getDates, areDatesIdentical } from "../../lib/WinDate/Calendar/Month/helper";
import type { DatesFormat } from "../../lib/WinDate/Calendar/Month/type";
import { getMonths, areMonthsIdentical } from "../../lib/WinDate/Calendar/Year/helper";
import type { MonthsFormat } from "../../lib/WinDate/Calendar/Year/type";

describe("getDate helper", () => {
  describe("Tests for March 2023", () => {
    let expectedResultFromMarch2023: DatesFormat[]

    beforeAll(() => {
      expectedResultFromMarch2023 = [
        {
          getDate: 27,
          getFormatedDate: '2023-02-27',
          isFromChosenMonth: false,
          isToday: false,
          isChosenDate: false
        },
        {
          getDate: 28,
          getFormatedDate: '2023-02-28',
          isFromChosenMonth: false,
          isToday: false,
          isChosenDate: false
        },
        {
          getDate: 1,
          getFormatedDate: '2023-03-01',
          isFromChosenMonth: true,
          isToday: false,
          isChosenDate: true
        },
        {
          getDate: 2,
          getFormatedDate: '2023-03-02',
          isFromChosenMonth: true,
          isToday: false,
          isChosenDate: false
        },
        {
          getDate: 3,
          getFormatedDate: '2023-03-03',
          isFromChosenMonth: true,
          isToday: false,
          isChosenDate: false
        },
        {
          getDate: 4,
          getFormatedDate: '2023-03-04',
          isFromChosenMonth: true,
          isToday: false,
          isChosenDate: false
        },
        {
          getDate: 5,
          getFormatedDate: '2023-03-05',
          isFromChosenMonth: true,
          isToday: false,
          isChosenDate: false
        },
        {
          getDate: 6,
          getFormatedDate: '2023-03-06',
          isFromChosenMonth: true,
          isToday: false,
          isChosenDate: false
        },
        {
          getDate: 7,
          getFormatedDate: '2023-03-07',
          isFromChosenMonth: true,
          isToday: false,
          isChosenDate: false
        },
        {
          getDate: 8,
          getFormatedDate: '2023-03-08',
          isFromChosenMonth: true,
          isToday: false,
          isChosenDate: false
        },
        {
          getDate: 9,
          getFormatedDate: '2023-03-09',
          isFromChosenMonth: true,
          isToday: false,
          isChosenDate: false
        },
        {
          getDate: 10,
          getFormatedDate: '2023-03-10',
          isFromChosenMonth: true,
          isToday: false,
          isChosenDate: false
        },
        {
          getDate: 11,
          getFormatedDate: '2023-03-11',
          isFromChosenMonth: true,
          isToday: false,
          isChosenDate: false
        },
        {
          getDate: 12,
          getFormatedDate: '2023-03-12',
          isFromChosenMonth: true,
          isToday: false,
          isChosenDate: false
        },
        {
          getDate: 13,
          getFormatedDate: '2023-03-13',
          isFromChosenMonth: true,
          isToday: false,
          isChosenDate: false
        },
        {
          getDate: 14,
          getFormatedDate: '2023-03-14',
          isFromChosenMonth: true,
          isToday: false,
          isChosenDate: false
        },
        {
          getDate: 15,
          getFormatedDate: '2023-03-15',
          isFromChosenMonth: true,
          isToday: false,
          isChosenDate: false
        },
        {
          getDate: 16,
          getFormatedDate: '2023-03-16',
          isFromChosenMonth: true,
          isToday: false,
          isChosenDate: false
        },
        {
          getDate: 17,
          getFormatedDate: '2023-03-17',
          isFromChosenMonth: true,
          isToday: false,
          isChosenDate: false
        },
        {
          getDate: 18,
          getFormatedDate: '2023-03-18',
          isFromChosenMonth: true,
          isToday: false,
          isChosenDate: false
        },
        {
          getDate: 19,
          getFormatedDate: '2023-03-19',
          isFromChosenMonth: true,
          isToday: false,
          isChosenDate: false
        },
        {
          getDate: 20,
          getFormatedDate: '2023-03-20',
          isFromChosenMonth: true,
          isToday: false,
          isChosenDate: false
        },
        {
          getDate: 21,
          getFormatedDate: '2023-03-21',
          isFromChosenMonth: true,
          isToday: false,
          isChosenDate: false
        },
        {
          getDate: 22,
          getFormatedDate: '2023-03-22',
          isFromChosenMonth: true,
          isToday: false,
          isChosenDate: false
        },
        {
          getDate: 23,
          getFormatedDate: '2023-03-23',
          isFromChosenMonth: true,
          isToday: false,
          isChosenDate: false
        },
        {
          getDate: 24,
          getFormatedDate: '2023-03-24',
          isFromChosenMonth: true,
          isToday: false,
          isChosenDate: false
        },
        {
          getDate: 25,
          getFormatedDate: '2023-03-25',
          isFromChosenMonth: true,
          isToday: false,
          isChosenDate: false
        },
        {
          getDate: 26,
          getFormatedDate: '2023-03-26',
          isFromChosenMonth: true,
          isToday: false,
          isChosenDate: false
        },
        {
          getDate: 27,
          getFormatedDate: '2023-03-27',
          isFromChosenMonth: true,
          isToday: false,
          isChosenDate: false
        },
        {
          getDate: 28,
          getFormatedDate: '2023-03-28',
          isFromChosenMonth: true,
          isToday: false,
          isChosenDate: false
        },
        {
          getDate: 29,
          getFormatedDate: '2023-03-29',
          isFromChosenMonth: true,
          isToday: false,
          isChosenDate: false
        },
        {
          getDate: 30,
          getFormatedDate: '2023-03-30',
          isFromChosenMonth: true,
          isToday: false,
          isChosenDate: false
        },
        {
          getDate: 31,
          getFormatedDate: '2023-03-31',
          isFromChosenMonth: true,
          isToday: false,
          isChosenDate: false
        },
        {
          getDate: 1,
          getFormatedDate: '2023-04-01',
          isFromChosenMonth: false,
          isToday: false,
          isChosenDate: false
        },
        {
          getDate: 2,
          getFormatedDate: '2023-04-02',
          isFromChosenMonth: false,
          isToday: false,
          isChosenDate: false
        },
        {
          getDate: 3,
          getFormatedDate: '2023-04-03',
          isFromChosenMonth: false,
          isToday: false,
          isChosenDate: false
        },
        {
          getDate: 4,
          getFormatedDate: '2023-04-04',
          isFromChosenMonth: false,
          isToday: false,
          isChosenDate: false
        },
        {
          getDate: 5,
          getFormatedDate: '2023-04-05',
          isFromChosenMonth: false,
          isToday: false,
          isChosenDate: false
        },
        {
          getDate: 6,
          getFormatedDate: '2023-04-06',
          isFromChosenMonth: false,
          isToday: false,
          isChosenDate: false
        },
        {
          getDate: 7,
          getFormatedDate: '2023-04-07',
          isFromChosenMonth: false,
          isToday: false,
          isChosenDate: false
        },
        {
          getDate: 8,
          getFormatedDate: '2023-04-08',
          isFromChosenMonth: false,
          isToday: false,
          isChosenDate: false
        },
        {
          getDate: 9,
          getFormatedDate: '2023-04-09',
          isFromChosenMonth: false,
          isToday: false,
          isChosenDate: false
        }
      ]
    })

    it("should return the expected result if we set March 1 2023 as parameter", () => {
      const date = new Date(2023, 2, 1)
      console.log(getDates(date))
      expect(getDates(date)).toEqual(expectedResultFromMarch2023)
    })
  })

  describe("Tests for Sept 2022", () => {
    let expectedResultFromSept2022: DatesFormat[]

    beforeAll(() => {
      expectedResultFromSept2022 = [
        {
          "getDate": 29,
          "getFormatedDate": "2022-08-29",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 30,
          "getFormatedDate": "2022-08-30",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 31,
          "getFormatedDate": "2022-08-31",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 1,
          "getFormatedDate": "2022-09-01",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": true
        },
        {
          "getDate": 2,
          "getFormatedDate": "2022-09-02",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 3,
          "getFormatedDate": "2022-09-03",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 4,
          "getFormatedDate": "2022-09-04",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 5,
          "getFormatedDate": "2022-09-05",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 6,
          "getFormatedDate": "2022-09-06",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 7,
          "getFormatedDate": "2022-09-07",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 8,
          "getFormatedDate": "2022-09-08",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 9,
          "getFormatedDate": "2022-09-09",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 10,
          "getFormatedDate": "2022-09-10",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 11,
          "getFormatedDate": "2022-09-11",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 12,
          "getFormatedDate": "2022-09-12",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 13,
          "getFormatedDate": "2022-09-13",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 14,
          "getFormatedDate": "2022-09-14",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 15,
          "getFormatedDate": "2022-09-15",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 16,
          "getFormatedDate": "2022-09-16",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 17,
          "getFormatedDate": "2022-09-17",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 18,
          "getFormatedDate": "2022-09-18",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 19,
          "getFormatedDate": "2022-09-19",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 20,
          "getFormatedDate": "2022-09-20",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 21,
          "getFormatedDate": "2022-09-21",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 22,
          "getFormatedDate": "2022-09-22",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 23,
          "getFormatedDate": "2022-09-23",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 24,
          "getFormatedDate": "2022-09-24",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 25,
          "getFormatedDate": "2022-09-25",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 26,
          "getFormatedDate": "2022-09-26",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 27,
          "getFormatedDate": "2022-09-27",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 28,
          "getFormatedDate": "2022-09-28",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 29,
          "getFormatedDate": "2022-09-29",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 30,
          "getFormatedDate": "2022-09-30",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 1,
          "getFormatedDate": "2022-10-01",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 2,
          "getFormatedDate": "2022-10-02",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 3,
          "getFormatedDate": "2022-10-03",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 4,
          "getFormatedDate": "2022-10-04",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 5,
          "getFormatedDate": "2022-10-05",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 6,
          "getFormatedDate": "2022-10-06",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 7,
          "getFormatedDate": "2022-10-07",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 8,
          "getFormatedDate": "2022-10-08",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 9,
          "getFormatedDate": "2022-10-09",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false
        }
      ]
    })

    it("should return the expected result if we set Sept 1 2022 as parameter", () => {
      const date = new Date(2022, 8, 1)
      expect(getDates(date)).toEqual(expectedResultFromSept2022)
    })
  })
})

describe("getMonths helper", () => {
  describe("tests for 2020", () => {
    let expectedResultsFor2020: MonthsFormat[]

    beforeAll(() => {
      expectedResultsFor2020 = [
        {
          "getMonthAbbrev": "janv.",
          "getFormatedDate": "2020-01-01",
          "isFromChosenYear": true,
          "isCurrentMonth": false,
          "isChosenMonth": true
        },
        {
          "getMonthAbbrev": "févr.",
          "getFormatedDate": "2020-02-01",
          "isFromChosenYear": true,
          "isCurrentMonth": false,
          "isChosenMonth": false
        },
        {
          "getMonthAbbrev": "mars",
          "getFormatedDate": "2020-03-01",
          "isFromChosenYear": true,
          "isCurrentMonth": false,
          "isChosenMonth": false
        },
        {
          "getMonthAbbrev": "avr.",
          "getFormatedDate": "2020-04-01",
          "isFromChosenYear": true,
          "isCurrentMonth": false,
          "isChosenMonth": false
        },
        {
          "getMonthAbbrev": "mai",
          "getFormatedDate": "2020-05-01",
          "isFromChosenYear": true,
          "isCurrentMonth": false,
          "isChosenMonth": false
        },
        {
          "getMonthAbbrev": "juin",
          "getFormatedDate": "2020-06-01",
          "isFromChosenYear": true,
          "isCurrentMonth": false,
          "isChosenMonth": false
        },
        {
          "getMonthAbbrev": "juil.",
          "getFormatedDate": "2020-07-01",
          "isFromChosenYear": true,
          "isCurrentMonth": false,
          "isChosenMonth": false
        },
        {
          "getMonthAbbrev": "août",
          "getFormatedDate": "2020-08-01",
          "isFromChosenYear": true,
          "isCurrentMonth": false,
          "isChosenMonth": false
        },
        {
          "getMonthAbbrev": "sept.",
          "getFormatedDate": "2020-09-01",
          "isFromChosenYear": true,
          "isCurrentMonth": false,
          "isChosenMonth": false
        },
        {
          "getMonthAbbrev": "oct.",
          "getFormatedDate": "2020-10-01",
          "isFromChosenYear": true,
          "isCurrentMonth": false,
          "isChosenMonth": false
        },
        {
          "getMonthAbbrev": "nov.",
          "getFormatedDate": "2020-11-01",
          "isFromChosenYear": true,
          "isCurrentMonth": false,
          "isChosenMonth": false
        },
        {
          "getMonthAbbrev": "déc.",
          "getFormatedDate": "2020-12-01",
          "isFromChosenYear": true,
          "isCurrentMonth": false,
          "isChosenMonth": false
        },
        {
          "getMonthAbbrev": "janv.",
          "getFormatedDate": "2021-01-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false
        },
        {
          "getMonthAbbrev": "févr.",
          "getFormatedDate": "2021-02-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false
        },
        {
          "getMonthAbbrev": "mars",
          "getFormatedDate": "2021-03-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false
        },
        {
          "getMonthAbbrev": "avr.",
          "getFormatedDate": "2021-04-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false
        }
      ]
    })

    it("should return the expected result if set a date from 2020 as parameter", () => {
      const date = new Date(2020, 0, 1)
      expect(getMonths(date)).toEqual(expectedResultsFor2020)
    })
  })

})

describe("areDatesIdentical helper", () => {
  it("Should return true for the same 2 dates", () => {
    const firstDate = new Date(2005, 2, 5)
    const secondDate = new Date(2005, 2, 5)
    expect(areDatesIdentical(firstDate, secondDate)).toBe(true)
  })

  it("Should return false for 2 different dates", () => {
    const firstDate = new Date(2020, 10, 11)
    const secondDate = new Date(2006, 1, 5)
    expect(areDatesIdentical(firstDate, secondDate)).toBe(false)
  })
})

describe("areMonthsIdentical helper", () => {
  it("Should return true for 2 dates with the same month and year", () => {
    const firstDate = new Date(2010, 3, 5)
    const secondDate = new Date(2010, 3, 15)
    expect(areMonthsIdentical(firstDate, secondDate)).toBe(true)
  })

  it("Should return false for 2 dates with the same month but different years", () => {
    const firstDate = new Date(2050, 1, 11)
    const secondDate = new Date(2006, 1, 5)
    expect(areMonthsIdentical(firstDate, secondDate)).toBe(false)
  })
})