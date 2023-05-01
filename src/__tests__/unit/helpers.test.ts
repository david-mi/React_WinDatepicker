import { expect } from "vitest";
import { getDates, formatDate, isDateToday } from "../../lib/WinDate/Month/helper";
import type { MonthDateFormat } from "../../lib/WinDate/Month/type";

describe("getDate helper", () => {
  describe("Tests for April 2023", () => {
    let expectedResultFromApril2023: MonthDateFormat[]

    beforeAll(() => {
      expectedResultFromApril2023 = [
        {
          "getDate": 27,
          "getFormatedDate": "2023-03-27",
          "isFromChosenMonth": false
        },
        {
          "getDate": 28,
          "getFormatedDate": "2023-03-28",
          "isFromChosenMonth": false
        },
        {
          "getDate": 29,
          "getFormatedDate": "2023-03-29",
          "isFromChosenMonth": false
        },
        {
          "getDate": 30,
          "getFormatedDate": "2023-03-30",
          "isFromChosenMonth": false
        },
        {
          "getDate": 31,
          "getFormatedDate": "2023-03-31",
          "isFromChosenMonth": false
        },
        {
          "getDate": 1,
          "getFormatedDate": "2023-04-01",
          "isFromChosenMonth": true
        },
        {
          "getDate": 2,
          "getFormatedDate": "2023-04-02",
          "isFromChosenMonth": true
        },
        {
          "getDate": 3,
          "getFormatedDate": "2023-04-03",
          "isFromChosenMonth": true
        },
        {
          "getDate": 4,
          "getFormatedDate": "2023-04-04",
          "isFromChosenMonth": true
        },
        {
          "getDate": 5,
          "getFormatedDate": "2023-04-05",
          "isFromChosenMonth": true
        },
        {
          "getDate": 6,
          "getFormatedDate": "2023-04-06",
          "isFromChosenMonth": true
        },
        {
          "getDate": 7,
          "getFormatedDate": "2023-04-07",
          "isFromChosenMonth": true
        },
        {
          "getDate": 8,
          "getFormatedDate": "2023-04-08",
          "isFromChosenMonth": true
        },
        {
          "getDate": 9,
          "getFormatedDate": "2023-04-09",
          "isFromChosenMonth": true
        },
        {
          "getDate": 10,
          "getFormatedDate": "2023-04-10",
          "isFromChosenMonth": true
        },
        {
          "getDate": 11,
          "getFormatedDate": "2023-04-11",
          "isFromChosenMonth": true
        },
        {
          "getDate": 12,
          "getFormatedDate": "2023-04-12",
          "isFromChosenMonth": true
        },
        {
          "getDate": 13,
          "getFormatedDate": "2023-04-13",
          "isFromChosenMonth": true
        },
        {
          "getDate": 14,
          "getFormatedDate": "2023-04-14",
          "isFromChosenMonth": true
        },
        {
          "getDate": 15,
          "getFormatedDate": "2023-04-15",
          "isFromChosenMonth": true
        },
        {
          "getDate": 16,
          "getFormatedDate": "2023-04-16",
          "isFromChosenMonth": true
        },
        {
          "getDate": 17,
          "getFormatedDate": "2023-04-17",
          "isFromChosenMonth": true
        },
        {
          "getDate": 18,
          "getFormatedDate": "2023-04-18",
          "isFromChosenMonth": true
        },
        {
          "getDate": 19,
          "getFormatedDate": "2023-04-19",
          "isFromChosenMonth": true
        },
        {
          "getDate": 20,
          "getFormatedDate": "2023-04-20",
          "isFromChosenMonth": true
        },
        {
          "getDate": 21,
          "getFormatedDate": "2023-04-21",
          "isFromChosenMonth": true
        },
        {
          "getDate": 22,
          "getFormatedDate": "2023-04-22",
          "isFromChosenMonth": true
        },
        {
          "getDate": 23,
          "getFormatedDate": "2023-04-23",
          "isFromChosenMonth": true
        },
        {
          "getDate": 24,
          "getFormatedDate": "2023-04-24",
          "isFromChosenMonth": true
        },
        {
          "getDate": 25,
          "getFormatedDate": "2023-04-25",
          "isFromChosenMonth": true
        },
        {
          "getDate": 26,
          "getFormatedDate": "2023-04-26",
          "isFromChosenMonth": true
        },
        {
          "getDate": 27,
          "getFormatedDate": "2023-04-27",
          "isFromChosenMonth": true
        },
        {
          "getDate": 28,
          "getFormatedDate": "2023-04-28",
          "isFromChosenMonth": true
        },
        {
          "getDate": 29,
          "getFormatedDate": "2023-04-29",
          "isFromChosenMonth": true
        },
        {
          "getDate": 30,
          "getFormatedDate": "2023-04-30",
          "isFromChosenMonth": true
        },
        {
          "getDate": 1,
          "getFormatedDate": "2023-05-01",
          "isFromChosenMonth": false
        },
        {
          "getDate": 2,
          "getFormatedDate": "2023-05-02",
          "isFromChosenMonth": false
        },
        {
          "getDate": 3,
          "getFormatedDate": "2023-05-03",
          "isFromChosenMonth": false
        },
        {
          "getDate": 4,
          "getFormatedDate": "2023-05-04",
          "isFromChosenMonth": false
        },
        {
          "getDate": 5,
          "getFormatedDate": "2023-05-05",
          "isFromChosenMonth": false
        },
        {
          "getDate": 6,
          "getFormatedDate": "2023-05-06",
          "isFromChosenMonth": false
        },
        {
          "getDate": 7,
          "getFormatedDate": "2023-05-07",
          "isFromChosenMonth": false
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

  describe("Tests for July 2023", () => {
    let expectedResultFromJuly2023: MonthDateFormat[]

    beforeAll(() => {
      expectedResultFromJuly2023 = [
        {
          "getDate": 26,
          "getFormatedDate": "2023-06-26",
          "isFromChosenMonth": false
        },
        {
          "getDate": 27,
          "getFormatedDate": "2023-06-27",
          "isFromChosenMonth": false
        },
        {
          "getDate": 28,
          "getFormatedDate": "2023-06-28",
          "isFromChosenMonth": false
        },
        {
          "getDate": 29,
          "getFormatedDate": "2023-06-29",
          "isFromChosenMonth": false
        },
        {
          "getDate": 30,
          "getFormatedDate": "2023-06-30",
          "isFromChosenMonth": false
        },
        {
          "getDate": 1,
          "getFormatedDate": "2023-07-01",
          "isFromChosenMonth": true
        },
        {
          "getDate": 2,
          "getFormatedDate": "2023-07-02",
          "isFromChosenMonth": true
        },
        {
          "getDate": 3,
          "getFormatedDate": "2023-07-03",
          "isFromChosenMonth": true
        },
        {
          "getDate": 4,
          "getFormatedDate": "2023-07-04",
          "isFromChosenMonth": true
        },
        {
          "getDate": 5,
          "getFormatedDate": "2023-07-05",
          "isFromChosenMonth": true
        },
        {
          "getDate": 6,
          "getFormatedDate": "2023-07-06",
          "isFromChosenMonth": true
        },
        {
          "getDate": 7,
          "getFormatedDate": "2023-07-07",
          "isFromChosenMonth": true
        },
        {
          "getDate": 8,
          "getFormatedDate": "2023-07-08",
          "isFromChosenMonth": true
        },
        {
          "getDate": 9,
          "getFormatedDate": "2023-07-09",
          "isFromChosenMonth": true
        },
        {
          "getDate": 10,
          "getFormatedDate": "2023-07-10",
          "isFromChosenMonth": true
        },
        {
          "getDate": 11,
          "getFormatedDate": "2023-07-11",
          "isFromChosenMonth": true
        },
        {
          "getDate": 12,
          "getFormatedDate": "2023-07-12",
          "isFromChosenMonth": true
        },
        {
          "getDate": 13,
          "getFormatedDate": "2023-07-13",
          "isFromChosenMonth": true
        },
        {
          "getDate": 14,
          "getFormatedDate": "2023-07-14",
          "isFromChosenMonth": true
        },
        {
          "getDate": 15,
          "getFormatedDate": "2023-07-15",
          "isFromChosenMonth": true
        },
        {
          "getDate": 16,
          "getFormatedDate": "2023-07-16",
          "isFromChosenMonth": true
        },
        {
          "getDate": 17,
          "getFormatedDate": "2023-07-17",
          "isFromChosenMonth": true
        },
        {
          "getDate": 18,
          "getFormatedDate": "2023-07-18",
          "isFromChosenMonth": true
        },
        {
          "getDate": 19,
          "getFormatedDate": "2023-07-19",
          "isFromChosenMonth": true
        },
        {
          "getDate": 20,
          "getFormatedDate": "2023-07-20",
          "isFromChosenMonth": true
        },
        {
          "getDate": 21,
          "getFormatedDate": "2023-07-21",
          "isFromChosenMonth": true
        },
        {
          "getDate": 22,
          "getFormatedDate": "2023-07-22",
          "isFromChosenMonth": true
        },
        {
          "getDate": 23,
          "getFormatedDate": "2023-07-23",
          "isFromChosenMonth": true
        },
        {
          "getDate": 24,
          "getFormatedDate": "2023-07-24",
          "isFromChosenMonth": true
        },
        {
          "getDate": 25,
          "getFormatedDate": "2023-07-25",
          "isFromChosenMonth": true
        },
        {
          "getDate": 26,
          "getFormatedDate": "2023-07-26",
          "isFromChosenMonth": true
        },
        {
          "getDate": 27,
          "getFormatedDate": "2023-07-27",
          "isFromChosenMonth": true
        },
        {
          "getDate": 28,
          "getFormatedDate": "2023-07-28",
          "isFromChosenMonth": true
        },
        {
          "getDate": 29,
          "getFormatedDate": "2023-07-29",
          "isFromChosenMonth": true
        },
        {
          "getDate": 30,
          "getFormatedDate": "2023-07-30",
          "isFromChosenMonth": true
        },
        {
          "getDate": 31,
          "getFormatedDate": "2023-07-31",
          "isFromChosenMonth": true
        },
        {
          "getDate": 1,
          "getFormatedDate": "2023-08-01",
          "isFromChosenMonth": false
        },
        {
          "getDate": 2,
          "getFormatedDate": "2023-08-02",
          "isFromChosenMonth": false
        },
        {
          "getDate": 3,
          "getFormatedDate": "2023-08-03",
          "isFromChosenMonth": false
        },
        {
          "getDate": 4,
          "getFormatedDate": "2023-08-04",
          "isFromChosenMonth": false
        },
        {
          "getDate": 5,
          "getFormatedDate": "2023-08-05",
          "isFromChosenMonth": false
        },
        {
          "getDate": 6,
          "getFormatedDate": "2023-08-06",
          "isFromChosenMonth": false
        }
      ];
    })

    it("should return the expected result if we set July 1 2023 as parameter", () => {
      const date = new Date(2023, 6, 1)
      expect(getDates(date)).toEqual(expectedResultFromJuly2023)
    })

    it("should return the expected result as before if we set July 11 2023 as parameter", () => {
      const date = new Date(2023, 6, 11)
      expect(getDates(date)).toEqual(expectedResultFromJuly2023)
    })
  })
})

describe("formatDate helper", () => {
  it("Should return 2023-04-01 for a new Date set to first april 2023", () => {
    const date = new Date(2023, 3, 1)
    expect(formatDate(date)).toBe("2023-04-01")
  })

  it("Should return 2023-12-24 for a new Date set to december 24th 2025", () => {
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