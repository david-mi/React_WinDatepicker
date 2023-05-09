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
          "getDate": 30,
          "getFormatedDate": "2023-01-30",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 31,
          "getFormatedDate": "2023-01-31",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 1,
          "getFormatedDate": "2023-02-01",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 2,
          "getFormatedDate": "2023-02-02",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 3,
          "getFormatedDate": "2023-02-03",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 4,
          "getFormatedDate": "2023-02-04",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 5,
          "getFormatedDate": "2023-02-05",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 6,
          "getFormatedDate": "2023-02-06",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 7,
          "getFormatedDate": "2023-02-07",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 8,
          "getFormatedDate": "2023-02-08",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 9,
          "getFormatedDate": "2023-02-09",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 10,
          "getFormatedDate": "2023-02-10",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 11,
          "getFormatedDate": "2023-02-11",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 12,
          "getFormatedDate": "2023-02-12",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 13,
          "getFormatedDate": "2023-02-13",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 14,
          "getFormatedDate": "2023-02-14",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 15,
          "getFormatedDate": "2023-02-15",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 16,
          "getFormatedDate": "2023-02-16",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 17,
          "getFormatedDate": "2023-02-17",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 18,
          "getFormatedDate": "2023-02-18",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 19,
          "getFormatedDate": "2023-02-19",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 20,
          "getFormatedDate": "2023-02-20",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 21,
          "getFormatedDate": "2023-02-21",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 22,
          "getFormatedDate": "2023-02-22",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 23,
          "getFormatedDate": "2023-02-23",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 24,
          "getFormatedDate": "2023-02-24",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 25,
          "getFormatedDate": "2023-02-25",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 26,
          "getFormatedDate": "2023-02-26",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 27,
          "getFormatedDate": "2023-02-27",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 28,
          "getFormatedDate": "2023-02-28",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 1,
          "getFormatedDate": "2023-03-01",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": true,
          "isFirstDayOfCurrentMonth": true
        },
        {
          "getDate": 2,
          "getFormatedDate": "2023-03-02",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 3,
          "getFormatedDate": "2023-03-03",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 4,
          "getFormatedDate": "2023-03-04",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 5,
          "getFormatedDate": "2023-03-05",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 6,
          "getFormatedDate": "2023-03-06",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 7,
          "getFormatedDate": "2023-03-07",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 8,
          "getFormatedDate": "2023-03-08",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 9,
          "getFormatedDate": "2023-03-09",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 10,
          "getFormatedDate": "2023-03-10",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 11,
          "getFormatedDate": "2023-03-11",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 12,
          "getFormatedDate": "2023-03-12",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 13,
          "getFormatedDate": "2023-03-13",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 14,
          "getFormatedDate": "2023-03-14",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 15,
          "getFormatedDate": "2023-03-15",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 16,
          "getFormatedDate": "2023-03-16",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 17,
          "getFormatedDate": "2023-03-17",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 18,
          "getFormatedDate": "2023-03-18",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 19,
          "getFormatedDate": "2023-03-19",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 20,
          "getFormatedDate": "2023-03-20",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 21,
          "getFormatedDate": "2023-03-21",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 22,
          "getFormatedDate": "2023-03-22",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 23,
          "getFormatedDate": "2023-03-23",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 24,
          "getFormatedDate": "2023-03-24",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 25,
          "getFormatedDate": "2023-03-25",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 26,
          "getFormatedDate": "2023-03-26",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 27,
          "getFormatedDate": "2023-03-27",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 28,
          "getFormatedDate": "2023-03-28",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 29,
          "getFormatedDate": "2023-03-29",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 30,
          "getFormatedDate": "2023-03-30",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 31,
          "getFormatedDate": "2023-03-31",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 1,
          "getFormatedDate": "2023-04-01",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 2,
          "getFormatedDate": "2023-04-02",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 3,
          "getFormatedDate": "2023-04-03",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 4,
          "getFormatedDate": "2023-04-04",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 5,
          "getFormatedDate": "2023-04-05",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 6,
          "getFormatedDate": "2023-04-06",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 7,
          "getFormatedDate": "2023-04-07",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 8,
          "getFormatedDate": "2023-04-08",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 9,
          "getFormatedDate": "2023-04-09",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 10,
          "getFormatedDate": "2023-04-10",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 11,
          "getFormatedDate": "2023-04-11",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 12,
          "getFormatedDate": "2023-04-12",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 13,
          "getFormatedDate": "2023-04-13",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 14,
          "getFormatedDate": "2023-04-14",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 15,
          "getFormatedDate": "2023-04-15",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 16,
          "getFormatedDate": "2023-04-16",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 17,
          "getFormatedDate": "2023-04-17",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 18,
          "getFormatedDate": "2023-04-18",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 19,
          "getFormatedDate": "2023-04-19",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 20,
          "getFormatedDate": "2023-04-20",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 21,
          "getFormatedDate": "2023-04-21",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 22,
          "getFormatedDate": "2023-04-22",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 23,
          "getFormatedDate": "2023-04-23",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 24,
          "getFormatedDate": "2023-04-24",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 25,
          "getFormatedDate": "2023-04-25",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 26,
          "getFormatedDate": "2023-04-26",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 27,
          "getFormatedDate": "2023-04-27",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 28,
          "getFormatedDate": "2023-04-28",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 29,
          "getFormatedDate": "2023-04-29",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 30,
          "getFormatedDate": "2023-04-30",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 1,
          "getFormatedDate": "2023-05-01",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 2,
          "getFormatedDate": "2023-05-02",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 3,
          "getFormatedDate": "2023-05-03",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 4,
          "getFormatedDate": "2023-05-04",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 5,
          "getFormatedDate": "2023-05-05",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 6,
          "getFormatedDate": "2023-05-06",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 7,
          "getFormatedDate": "2023-05-07",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        }
      ]
    })

    it("should return the expected result if we set March 1 2023 as parameter", () => {
      const date = new Date(2023, 2, 1)
      expect(getDates(date)).toEqual(expectedResultFromMarch2023)
    })
  })

  describe("Tests for Oct 2022", () => {
    let expectedResultFromOct2022: DatesFormat[]

    beforeAll(() => {
      expectedResultFromOct2022 = [
        {
          "getDate": 29,
          "getFormatedDate": "2022-08-29",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 30,
          "getFormatedDate": "2022-08-30",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 31,
          "getFormatedDate": "2022-08-31",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 1,
          "getFormatedDate": "2022-09-01",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 2,
          "getFormatedDate": "2022-09-02",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 3,
          "getFormatedDate": "2022-09-03",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 4,
          "getFormatedDate": "2022-09-04",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 5,
          "getFormatedDate": "2022-09-05",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 6,
          "getFormatedDate": "2022-09-06",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 7,
          "getFormatedDate": "2022-09-07",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 8,
          "getFormatedDate": "2022-09-08",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 9,
          "getFormatedDate": "2022-09-09",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 10,
          "getFormatedDate": "2022-09-10",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 11,
          "getFormatedDate": "2022-09-11",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 12,
          "getFormatedDate": "2022-09-12",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 13,
          "getFormatedDate": "2022-09-13",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 14,
          "getFormatedDate": "2022-09-14",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 15,
          "getFormatedDate": "2022-09-15",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 16,
          "getFormatedDate": "2022-09-16",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 17,
          "getFormatedDate": "2022-09-17",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 18,
          "getFormatedDate": "2022-09-18",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 19,
          "getFormatedDate": "2022-09-19",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 20,
          "getFormatedDate": "2022-09-20",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 21,
          "getFormatedDate": "2022-09-21",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 22,
          "getFormatedDate": "2022-09-22",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 23,
          "getFormatedDate": "2022-09-23",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 24,
          "getFormatedDate": "2022-09-24",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 25,
          "getFormatedDate": "2022-09-25",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 26,
          "getFormatedDate": "2022-09-26",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 27,
          "getFormatedDate": "2022-09-27",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 28,
          "getFormatedDate": "2022-09-28",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 29,
          "getFormatedDate": "2022-09-29",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 30,
          "getFormatedDate": "2022-09-30",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 1,
          "getFormatedDate": "2022-10-01",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": true,
          "isFirstDayOfCurrentMonth": true
        },
        {
          "getDate": 2,
          "getFormatedDate": "2022-10-02",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 3,
          "getFormatedDate": "2022-10-03",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 4,
          "getFormatedDate": "2022-10-04",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 5,
          "getFormatedDate": "2022-10-05",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 6,
          "getFormatedDate": "2022-10-06",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 7,
          "getFormatedDate": "2022-10-07",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 8,
          "getFormatedDate": "2022-10-08",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 9,
          "getFormatedDate": "2022-10-09",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 10,
          "getFormatedDate": "2022-10-10",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 11,
          "getFormatedDate": "2022-10-11",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 12,
          "getFormatedDate": "2022-10-12",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 13,
          "getFormatedDate": "2022-10-13",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 14,
          "getFormatedDate": "2022-10-14",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 15,
          "getFormatedDate": "2022-10-15",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 16,
          "getFormatedDate": "2022-10-16",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 17,
          "getFormatedDate": "2022-10-17",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 18,
          "getFormatedDate": "2022-10-18",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 19,
          "getFormatedDate": "2022-10-19",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 20,
          "getFormatedDate": "2022-10-20",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 21,
          "getFormatedDate": "2022-10-21",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 22,
          "getFormatedDate": "2022-10-22",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 23,
          "getFormatedDate": "2022-10-23",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 24,
          "getFormatedDate": "2022-10-24",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 25,
          "getFormatedDate": "2022-10-25",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 26,
          "getFormatedDate": "2022-10-26",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 27,
          "getFormatedDate": "2022-10-27",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 28,
          "getFormatedDate": "2022-10-28",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 29,
          "getFormatedDate": "2022-10-29",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 30,
          "getFormatedDate": "2022-10-30",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 31,
          "getFormatedDate": "2022-10-31",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 1,
          "getFormatedDate": "2022-11-01",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 2,
          "getFormatedDate": "2022-11-02",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 3,
          "getFormatedDate": "2022-11-03",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 4,
          "getFormatedDate": "2022-11-04",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 5,
          "getFormatedDate": "2022-11-05",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 6,
          "getFormatedDate": "2022-11-06",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 7,
          "getFormatedDate": "2022-11-07",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 8,
          "getFormatedDate": "2022-11-08",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 9,
          "getFormatedDate": "2022-11-09",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 10,
          "getFormatedDate": "2022-11-10",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 11,
          "getFormatedDate": "2022-11-11",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 12,
          "getFormatedDate": "2022-11-12",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 13,
          "getFormatedDate": "2022-11-13",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 14,
          "getFormatedDate": "2022-11-14",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 15,
          "getFormatedDate": "2022-11-15",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 16,
          "getFormatedDate": "2022-11-16",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 17,
          "getFormatedDate": "2022-11-17",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 18,
          "getFormatedDate": "2022-11-18",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 19,
          "getFormatedDate": "2022-11-19",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 20,
          "getFormatedDate": "2022-11-20",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 21,
          "getFormatedDate": "2022-11-21",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 22,
          "getFormatedDate": "2022-11-22",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 23,
          "getFormatedDate": "2022-11-23",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 24,
          "getFormatedDate": "2022-11-24",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 25,
          "getFormatedDate": "2022-11-25",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 26,
          "getFormatedDate": "2022-11-26",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 27,
          "getFormatedDate": "2022-11-27",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 28,
          "getFormatedDate": "2022-11-28",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 29,
          "getFormatedDate": "2022-11-29",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 30,
          "getFormatedDate": "2022-11-30",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 1,
          "getFormatedDate": "2022-12-01",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 2,
          "getFormatedDate": "2022-12-02",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 3,
          "getFormatedDate": "2022-12-03",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 4,
          "getFormatedDate": "2022-12-04",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 5,
          "getFormatedDate": "2022-12-05",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 6,
          "getFormatedDate": "2022-12-06",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 7,
          "getFormatedDate": "2022-12-07",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 8,
          "getFormatedDate": "2022-12-08",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 9,
          "getFormatedDate": "2022-12-09",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 10,
          "getFormatedDate": "2022-12-10",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        },
        {
          "getDate": 11,
          "getFormatedDate": "2022-12-11",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false
        }
      ]
    })

    it("should return the expected result if we set Oct 1 2022 as parameter", () => {
      const date = new Date(2022, 9, 1)
      expect(getDates(date)).toEqual(expectedResultFromOct2022)
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
          "getFormatedDate": "2019-01-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false
        },
        {
          "getMonthAbbrev": "févr.",
          "getFormatedDate": "2019-02-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false
        },
        {
          "getMonthAbbrev": "mars",
          "getFormatedDate": "2019-03-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false
        },
        {
          "getMonthAbbrev": "avr.",
          "getFormatedDate": "2019-04-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false
        },
        {
          "getMonthAbbrev": "mai",
          "getFormatedDate": "2019-05-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false
        },
        {
          "getMonthAbbrev": "juin",
          "getFormatedDate": "2019-06-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false
        },
        {
          "getMonthAbbrev": "juil.",
          "getFormatedDate": "2019-07-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false
        },
        {
          "getMonthAbbrev": "août",
          "getFormatedDate": "2019-08-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false
        },
        {
          "getMonthAbbrev": "sept.",
          "getFormatedDate": "2019-09-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false
        },
        {
          "getMonthAbbrev": "oct.",
          "getFormatedDate": "2019-10-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false
        },
        {
          "getMonthAbbrev": "nov.",
          "getFormatedDate": "2019-11-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false
        },
        {
          "getMonthAbbrev": "déc.",
          "getFormatedDate": "2019-12-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false
        },
        {
          "getMonthAbbrev": "janv.",
          "getFormatedDate": "2020-01-01",
          "isFromChosenYear": true,
          "isCurrentMonth": false,
          "isChosenMonth": true,
          "isFirstMonthOfCurrentYear": true
        },
        {
          "getMonthAbbrev": "févr.",
          "getFormatedDate": "2020-02-01",
          "isFromChosenYear": true,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false
        },
        {
          "getMonthAbbrev": "mars",
          "getFormatedDate": "2020-03-01",
          "isFromChosenYear": true,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false
        },
        {
          "getMonthAbbrev": "avr.",
          "getFormatedDate": "2020-04-01",
          "isFromChosenYear": true,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false
        },
        {
          "getMonthAbbrev": "mai",
          "getFormatedDate": "2020-05-01",
          "isFromChosenYear": true,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false
        },
        {
          "getMonthAbbrev": "juin",
          "getFormatedDate": "2020-06-01",
          "isFromChosenYear": true,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false
        },
        {
          "getMonthAbbrev": "juil.",
          "getFormatedDate": "2020-07-01",
          "isFromChosenYear": true,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false
        },
        {
          "getMonthAbbrev": "août",
          "getFormatedDate": "2020-08-01",
          "isFromChosenYear": true,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false
        },
        {
          "getMonthAbbrev": "sept.",
          "getFormatedDate": "2020-09-01",
          "isFromChosenYear": true,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false
        },
        {
          "getMonthAbbrev": "oct.",
          "getFormatedDate": "2020-10-01",
          "isFromChosenYear": true,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false
        },
        {
          "getMonthAbbrev": "nov.",
          "getFormatedDate": "2020-11-01",
          "isFromChosenYear": true,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false
        },
        {
          "getMonthAbbrev": "déc.",
          "getFormatedDate": "2020-12-01",
          "isFromChosenYear": true,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false
        },
        {
          "getMonthAbbrev": "janv.",
          "getFormatedDate": "2021-01-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false
        },
        {
          "getMonthAbbrev": "févr.",
          "getFormatedDate": "2021-02-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false
        },
        {
          "getMonthAbbrev": "mars",
          "getFormatedDate": "2021-03-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false
        },
        {
          "getMonthAbbrev": "avr.",
          "getFormatedDate": "2021-04-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false
        },
        {
          "getMonthAbbrev": "mai",
          "getFormatedDate": "2021-05-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false
        },
        {
          "getMonthAbbrev": "juin",
          "getFormatedDate": "2021-06-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false
        },
        {
          "getMonthAbbrev": "juil.",
          "getFormatedDate": "2021-07-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false
        },
        {
          "getMonthAbbrev": "août",
          "getFormatedDate": "2021-08-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false
        },
        {
          "getMonthAbbrev": "sept.",
          "getFormatedDate": "2021-09-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false
        },
        {
          "getMonthAbbrev": "oct.",
          "getFormatedDate": "2021-10-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false
        },
        {
          "getMonthAbbrev": "nov.",
          "getFormatedDate": "2021-11-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false
        },
        {
          "getMonthAbbrev": "déc.",
          "getFormatedDate": "2021-12-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false
        },
        {
          "getMonthAbbrev": "janv.",
          "getFormatedDate": "2022-01-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false
        },
        {
          "getMonthAbbrev": "févr.",
          "getFormatedDate": "2022-02-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false
        },
        {
          "getMonthAbbrev": "mars",
          "getFormatedDate": "2022-03-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false
        },
        {
          "getMonthAbbrev": "avr.",
          "getFormatedDate": "2022-04-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false
        },
        {
          "getMonthAbbrev": "mai",
          "getFormatedDate": "2022-05-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false
        },
        {
          "getMonthAbbrev": "juin",
          "getFormatedDate": "2022-06-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false
        },
        {
          "getMonthAbbrev": "juil.",
          "getFormatedDate": "2022-07-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false
        },
        {
          "getMonthAbbrev": "août",
          "getFormatedDate": "2022-08-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false
        },
        {
          "getMonthAbbrev": "sept.",
          "getFormatedDate": "2022-09-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false
        },
        {
          "getMonthAbbrev": "oct.",
          "getFormatedDate": "2022-10-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false
        },
        {
          "getMonthAbbrev": "nov.",
          "getFormatedDate": "2022-11-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false
        },
        {
          "getMonthAbbrev": "déc.",
          "getFormatedDate": "2022-12-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false
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