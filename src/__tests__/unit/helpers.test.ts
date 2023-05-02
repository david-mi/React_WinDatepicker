import { expect } from "vitest";
import { getDates, areDatesIdentical } from "../../lib/WinDate/Calendar/Month/helper";
import type { DatesFormat } from "../../lib/WinDate/Calendar/Month/type";
import { getMonths, areMonthsIdentical } from "../../lib/WinDate/Calendar/Year/helper";
import type { MonthsFormat } from "../../lib/WinDate/Calendar/Year/type";
import { formatDate } from "../../lib/WinDate/utils";

describe("getDate helper", () => {
  describe("Tests for April 2023", () => {
    let expectedResultFromApril2023: DatesFormat[]

    beforeAll(() => {
      expectedResultFromApril2023 = [
        {
          "getDate": 27,
          "getFormatedDate": "2023-03-27",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 28,
          "getFormatedDate": "2023-03-28",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 29,
          "getFormatedDate": "2023-03-29",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 30,
          "getFormatedDate": "2023-03-30",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 31,
          "getFormatedDate": "2023-03-31",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 1,
          "getFormatedDate": "2023-04-01",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": true
        },
        {
          "getDate": 2,
          "getFormatedDate": "2023-04-02",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 3,
          "getFormatedDate": "2023-04-03",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 4,
          "getFormatedDate": "2023-04-04",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 5,
          "getFormatedDate": "2023-04-05",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 6,
          "getFormatedDate": "2023-04-06",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 7,
          "getFormatedDate": "2023-04-07",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 8,
          "getFormatedDate": "2023-04-08",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 9,
          "getFormatedDate": "2023-04-09",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 10,
          "getFormatedDate": "2023-04-10",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 11,
          "getFormatedDate": "2023-04-11",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 12,
          "getFormatedDate": "2023-04-12",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 13,
          "getFormatedDate": "2023-04-13",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 14,
          "getFormatedDate": "2023-04-14",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 15,
          "getFormatedDate": "2023-04-15",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 16,
          "getFormatedDate": "2023-04-16",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 17,
          "getFormatedDate": "2023-04-17",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 18,
          "getFormatedDate": "2023-04-18",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 19,
          "getFormatedDate": "2023-04-19",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 20,
          "getFormatedDate": "2023-04-20",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 21,
          "getFormatedDate": "2023-04-21",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 22,
          "getFormatedDate": "2023-04-22",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 23,
          "getFormatedDate": "2023-04-23",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 24,
          "getFormatedDate": "2023-04-24",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 25,
          "getFormatedDate": "2023-04-25",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 26,
          "getFormatedDate": "2023-04-26",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 27,
          "getFormatedDate": "2023-04-27",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 28,
          "getFormatedDate": "2023-04-28",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 29,
          "getFormatedDate": "2023-04-29",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 30,
          "getFormatedDate": "2023-04-30",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 1,
          "getFormatedDate": "2023-05-01",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 2,
          "getFormatedDate": "2023-05-02",
          "isFromChosenMonth": false,
          "isToday": true,
          "isChosenDate": false
        },
        {
          "getDate": 3,
          "getFormatedDate": "2023-05-03",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 4,
          "getFormatedDate": "2023-05-04",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 5,
          "getFormatedDate": "2023-05-05",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 6,
          "getFormatedDate": "2023-05-06",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false
        },
        {
          "getDate": 7,
          "getFormatedDate": "2023-05-07",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false
        }
      ]
    })

    it("should return the expected result if we set April 1 2023 as parameter", () => {
      const date = new Date(2023, 3, 1)
      expect(getDates(date)).toEqual(expectedResultFromApril2023)
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

describe("formatDate helper", () => {
  it("Should return 2023-04-01 for a new Date set to April 1st 2023", () => {
    const date = new Date(2023, 3, 1)
    expect(formatDate(date)).toBe("2023-04-01")
  })

  it("Should return 2023-12-24 for a new Date set to December 24th 2025", () => {
    const date = new Date(2025, 11, 24)
    expect(formatDate(date)).toBe("2025-12-24")
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