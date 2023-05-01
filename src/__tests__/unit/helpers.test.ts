import { expect } from "vitest";
import { getDates, formatDate, isDateToday } from "../../lib/WinDate/Calendar/Month/helper";
import type { MonthDateFormat } from "../../lib/WinDate/Calendar/Month/type";

describe("getDate helper", () => {
  describe("Tests for April 2023", () => {
    let expectedResultFromApril2023: MonthDateFormat[]

    beforeAll(() => {
      expectedResultFromApril2023 = [
        {
          "getDate": 27,
          "getFormatedDate": "2023-03-27",
          "isFromChosenMonth": false,
          "isToday": false
        },
        {
          "getDate": 28,
          "getFormatedDate": "2023-03-28",
          "isFromChosenMonth": false,
          "isToday": false
        },
        {
          "getDate": 29,
          "getFormatedDate": "2023-03-29",
          "isFromChosenMonth": false,
          "isToday": false
        },
        {
          "getDate": 30,
          "getFormatedDate": "2023-03-30",
          "isFromChosenMonth": false,
          "isToday": false
        },
        {
          "getDate": 31,
          "getFormatedDate": "2023-03-31",
          "isFromChosenMonth": false,
          "isToday": false
        },
        {
          "getDate": 1,
          "getFormatedDate": "2023-04-01",
          "isFromChosenMonth": true,
          "isToday": false
        },
        {
          "getDate": 2,
          "getFormatedDate": "2023-04-02",
          "isFromChosenMonth": true,
          "isToday": false
        },
        {
          "getDate": 3,
          "getFormatedDate": "2023-04-03",
          "isFromChosenMonth": true,
          "isToday": false
        },
        {
          "getDate": 4,
          "getFormatedDate": "2023-04-04",
          "isFromChosenMonth": true,
          "isToday": false
        },
        {
          "getDate": 5,
          "getFormatedDate": "2023-04-05",
          "isFromChosenMonth": true,
          "isToday": false
        },
        {
          "getDate": 6,
          "getFormatedDate": "2023-04-06",
          "isFromChosenMonth": true,
          "isToday": false
        },
        {
          "getDate": 7,
          "getFormatedDate": "2023-04-07",
          "isFromChosenMonth": true,
          "isToday": false
        },
        {
          "getDate": 8,
          "getFormatedDate": "2023-04-08",
          "isFromChosenMonth": true,
          "isToday": false
        },
        {
          "getDate": 9,
          "getFormatedDate": "2023-04-09",
          "isFromChosenMonth": true,
          "isToday": false
        },
        {
          "getDate": 10,
          "getFormatedDate": "2023-04-10",
          "isFromChosenMonth": true,
          "isToday": false
        },
        {
          "getDate": 11,
          "getFormatedDate": "2023-04-11",
          "isFromChosenMonth": true,
          "isToday": false
        },
        {
          "getDate": 12,
          "getFormatedDate": "2023-04-12",
          "isFromChosenMonth": true,
          "isToday": false
        },
        {
          "getDate": 13,
          "getFormatedDate": "2023-04-13",
          "isFromChosenMonth": true,
          "isToday": false
        },
        {
          "getDate": 14,
          "getFormatedDate": "2023-04-14",
          "isFromChosenMonth": true,
          "isToday": false
        },
        {
          "getDate": 15,
          "getFormatedDate": "2023-04-15",
          "isFromChosenMonth": true,
          "isToday": false
        },
        {
          "getDate": 16,
          "getFormatedDate": "2023-04-16",
          "isFromChosenMonth": true,
          "isToday": false
        },
        {
          "getDate": 17,
          "getFormatedDate": "2023-04-17",
          "isFromChosenMonth": true,
          "isToday": false
        },
        {
          "getDate": 18,
          "getFormatedDate": "2023-04-18",
          "isFromChosenMonth": true,
          "isToday": false
        },
        {
          "getDate": 19,
          "getFormatedDate": "2023-04-19",
          "isFromChosenMonth": true,
          "isToday": false
        },
        {
          "getDate": 20,
          "getFormatedDate": "2023-04-20",
          "isFromChosenMonth": true,
          "isToday": false
        },
        {
          "getDate": 21,
          "getFormatedDate": "2023-04-21",
          "isFromChosenMonth": true,
          "isToday": false
        },
        {
          "getDate": 22,
          "getFormatedDate": "2023-04-22",
          "isFromChosenMonth": true,
          "isToday": false
        },
        {
          "getDate": 23,
          "getFormatedDate": "2023-04-23",
          "isFromChosenMonth": true,
          "isToday": false
        },
        {
          "getDate": 24,
          "getFormatedDate": "2023-04-24",
          "isFromChosenMonth": true,
          "isToday": false
        },
        {
          "getDate": 25,
          "getFormatedDate": "2023-04-25",
          "isFromChosenMonth": true,
          "isToday": false
        },
        {
          "getDate": 26,
          "getFormatedDate": "2023-04-26",
          "isFromChosenMonth": true,
          "isToday": false
        },
        {
          "getDate": 27,
          "getFormatedDate": "2023-04-27",
          "isFromChosenMonth": true,
          "isToday": false
        },
        {
          "getDate": 28,
          "getFormatedDate": "2023-04-28",
          "isFromChosenMonth": true,
          "isToday": false
        },
        {
          "getDate": 29,
          "getFormatedDate": "2023-04-29",
          "isFromChosenMonth": true,
          "isToday": false
        },
        {
          "getDate": 30,
          "getFormatedDate": "2023-04-30",
          "isFromChosenMonth": true,
          "isToday": false
        },
        {
          "getDate": 1,
          "getFormatedDate": "2023-05-01",
          "isFromChosenMonth": false,
          "isToday": true
        },
        {
          "getDate": 2,
          "getFormatedDate": "2023-05-02",
          "isFromChosenMonth": false,
          "isToday": false
        },
        {
          "getDate": 3,
          "getFormatedDate": "2023-05-03",
          "isFromChosenMonth": false,
          "isToday": false
        },
        {
          "getDate": 4,
          "getFormatedDate": "2023-05-04",
          "isFromChosenMonth": false,
          "isToday": false
        },
        {
          "getDate": 5,
          "getFormatedDate": "2023-05-05",
          "isFromChosenMonth": false,
          "isToday": false
        },
        {
          "getDate": 6,
          "getFormatedDate": "2023-05-06",
          "isFromChosenMonth": false,
          "isToday": false
        },
        {
          "getDate": 7,
          "getFormatedDate": "2023-05-07",
          "isFromChosenMonth": false,
          "isToday": false
        }
      ]
    })

    it("should return the expected result if we set April 1 2023 as parameter", () => {
      const date = new Date(2023, 3, 1)
      expect(getDates(date)).toEqual(expectedResultFromApril2023)
    })

    it("should return the expected result as before if we set April 15 2023 as parameter", () => {
      const date = new Date(2023, 3, 25)
      expect(getDates(date)).toEqual(expectedResultFromApril2023)
    })
  })

  describe("Tests for May 2023", () => {
    let expectedResultFromMay2023: MonthDateFormat[]

    beforeAll(() => {
      expectedResultFromMay2023 = [
        {
          "getDate": 1,
          "getFormatedDate": "2023-05-01",
          "isFromChosenMonth": true,
          "isToday": true
        },
        {
          "getDate": 2,
          "getFormatedDate": "2023-05-02",
          "isFromChosenMonth": true,
          "isToday": false
        },
        {
          "getDate": 3,
          "getFormatedDate": "2023-05-03",
          "isFromChosenMonth": true,
          "isToday": false
        },
        {
          "getDate": 4,
          "getFormatedDate": "2023-05-04",
          "isFromChosenMonth": true,
          "isToday": false
        },
        {
          "getDate": 5,
          "getFormatedDate": "2023-05-05",
          "isFromChosenMonth": true,
          "isToday": false
        },
        {
          "getDate": 6,
          "getFormatedDate": "2023-05-06",
          "isFromChosenMonth": true,
          "isToday": false
        },
        {
          "getDate": 7,
          "getFormatedDate": "2023-05-07",
          "isFromChosenMonth": true,
          "isToday": false
        },
        {
          "getDate": 8,
          "getFormatedDate": "2023-05-08",
          "isFromChosenMonth": true,
          "isToday": false
        },
        {
          "getDate": 9,
          "getFormatedDate": "2023-05-09",
          "isFromChosenMonth": true,
          "isToday": false
        },
        {
          "getDate": 10,
          "getFormatedDate": "2023-05-10",
          "isFromChosenMonth": true,
          "isToday": false
        },
        {
          "getDate": 11,
          "getFormatedDate": "2023-05-11",
          "isFromChosenMonth": true,
          "isToday": false
        },
        {
          "getDate": 12,
          "getFormatedDate": "2023-05-12",
          "isFromChosenMonth": true,
          "isToday": false
        },
        {
          "getDate": 13,
          "getFormatedDate": "2023-05-13",
          "isFromChosenMonth": true,
          "isToday": false
        },
        {
          "getDate": 14,
          "getFormatedDate": "2023-05-14",
          "isFromChosenMonth": true,
          "isToday": false
        },
        {
          "getDate": 15,
          "getFormatedDate": "2023-05-15",
          "isFromChosenMonth": true,
          "isToday": false
        },
        {
          "getDate": 16,
          "getFormatedDate": "2023-05-16",
          "isFromChosenMonth": true,
          "isToday": false
        },
        {
          "getDate": 17,
          "getFormatedDate": "2023-05-17",
          "isFromChosenMonth": true,
          "isToday": false
        },
        {
          "getDate": 18,
          "getFormatedDate": "2023-05-18",
          "isFromChosenMonth": true,
          "isToday": false
        },
        {
          "getDate": 19,
          "getFormatedDate": "2023-05-19",
          "isFromChosenMonth": true,
          "isToday": false
        },
        {
          "getDate": 20,
          "getFormatedDate": "2023-05-20",
          "isFromChosenMonth": true,
          "isToday": false
        },
        {
          "getDate": 21,
          "getFormatedDate": "2023-05-21",
          "isFromChosenMonth": true,
          "isToday": false
        },
        {
          "getDate": 22,
          "getFormatedDate": "2023-05-22",
          "isFromChosenMonth": true,
          "isToday": false
        },
        {
          "getDate": 23,
          "getFormatedDate": "2023-05-23",
          "isFromChosenMonth": true,
          "isToday": false
        },
        {
          "getDate": 24,
          "getFormatedDate": "2023-05-24",
          "isFromChosenMonth": true,
          "isToday": false
        },
        {
          "getDate": 25,
          "getFormatedDate": "2023-05-25",
          "isFromChosenMonth": true,
          "isToday": false
        },
        {
          "getDate": 26,
          "getFormatedDate": "2023-05-26",
          "isFromChosenMonth": true,
          "isToday": false
        },
        {
          "getDate": 27,
          "getFormatedDate": "2023-05-27",
          "isFromChosenMonth": true,
          "isToday": false
        },
        {
          "getDate": 28,
          "getFormatedDate": "2023-05-28",
          "isFromChosenMonth": true,
          "isToday": false
        },
        {
          "getDate": 29,
          "getFormatedDate": "2023-05-29",
          "isFromChosenMonth": true,
          "isToday": false
        },
        {
          "getDate": 30,
          "getFormatedDate": "2023-05-30",
          "isFromChosenMonth": true,
          "isToday": false
        },
        {
          "getDate": 31,
          "getFormatedDate": "2023-05-31",
          "isFromChosenMonth": true,
          "isToday": false
        },
        {
          "getDate": 1,
          "getFormatedDate": "2023-06-01",
          "isFromChosenMonth": false,
          "isToday": false
        },
        {
          "getDate": 2,
          "getFormatedDate": "2023-06-02",
          "isFromChosenMonth": false,
          "isToday": false
        },
        {
          "getDate": 3,
          "getFormatedDate": "2023-06-03",
          "isFromChosenMonth": false,
          "isToday": false
        },
        {
          "getDate": 4,
          "getFormatedDate": "2023-06-04",
          "isFromChosenMonth": false,
          "isToday": false
        },
        {
          "getDate": 5,
          "getFormatedDate": "2023-06-05",
          "isFromChosenMonth": false,
          "isToday": false
        },
        {
          "getDate": 6,
          "getFormatedDate": "2023-06-06",
          "isFromChosenMonth": false,
          "isToday": false
        },
        {
          "getDate": 7,
          "getFormatedDate": "2023-06-07",
          "isFromChosenMonth": false,
          "isToday": false
        },
        {
          "getDate": 8,
          "getFormatedDate": "2023-06-08",
          "isFromChosenMonth": false,
          "isToday": false
        },
        {
          "getDate": 9,
          "getFormatedDate": "2023-06-09",
          "isFromChosenMonth": false,
          "isToday": false
        },
        {
          "getDate": 10,
          "getFormatedDate": "2023-06-10",
          "isFromChosenMonth": false,
          "isToday": false
        },
        {
          "getDate": 11,
          "getFormatedDate": "2023-06-11",
          "isFromChosenMonth": false,
          "isToday": false
        }
      ]
    })

    it("should return the expected result if we set May 1 2023 as parameter", () => {
      const date = new Date(2023, 4, 1)
      expect(getDates(date)).toEqual(expectedResultFromMay2023)
    })

    it("should return the expected result as before if we set May 11 2023 as parameter", () => {
      const date = new Date(2023, 4, 11)
      expect(getDates(date)).toEqual(expectedResultFromMay2023)
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

describe("isDateToday helper", () => {
  it("Should return true for a new created Date", () => {
    const date = new Date()
    expect(isDateToday(date)).toBe(true)
  })

  it("Should return false for a new Date set to Jan 10th 2000", () => {
    const date = new Date(2000, 10, 1)
    expect(isDateToday(date)).toBe(false)
  })
})