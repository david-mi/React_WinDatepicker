import { expect } from "vitest";
import { getDates, checkIfDatesAreIdentical, checkIfDateIsOutsideRange } from "../../lib/WinDate/Calendar/Month/helper";
import type { DatesFormat } from "../../lib/WinDate/Calendar/Month/type";
import { getMonths, checkIfMonthsAreIdentical, checkIfOutsideMonthRange, checkIfYearsAreIdentical } from "../../lib/WinDate/Calendar/Year/helper"
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
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 31,
          "getFormatedDate": "2023-01-31",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 1,
          "getFormatedDate": "2023-02-01",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 2,
          "getFormatedDate": "2023-02-02",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 3,
          "getFormatedDate": "2023-02-03",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 4,
          "getFormatedDate": "2023-02-04",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 5,
          "getFormatedDate": "2023-02-05",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 6,
          "getFormatedDate": "2023-02-06",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 7,
          "getFormatedDate": "2023-02-07",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 8,
          "getFormatedDate": "2023-02-08",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 9,
          "getFormatedDate": "2023-02-09",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 10,
          "getFormatedDate": "2023-02-10",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 11,
          "getFormatedDate": "2023-02-11",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 12,
          "getFormatedDate": "2023-02-12",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 13,
          "getFormatedDate": "2023-02-13",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 14,
          "getFormatedDate": "2023-02-14",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 15,
          "getFormatedDate": "2023-02-15",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 16,
          "getFormatedDate": "2023-02-16",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 17,
          "getFormatedDate": "2023-02-17",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 18,
          "getFormatedDate": "2023-02-18",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 19,
          "getFormatedDate": "2023-02-19",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 20,
          "getFormatedDate": "2023-02-20",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 21,
          "getFormatedDate": "2023-02-21",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 22,
          "getFormatedDate": "2023-02-22",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 23,
          "getFormatedDate": "2023-02-23",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 24,
          "getFormatedDate": "2023-02-24",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 25,
          "getFormatedDate": "2023-02-25",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 26,
          "getFormatedDate": "2023-02-26",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 27,
          "getFormatedDate": "2023-02-27",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 28,
          "getFormatedDate": "2023-02-28",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 1,
          "getFormatedDate": "2023-03-01",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": true,
          "isFirstDayOfCurrentMonth": true,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 2,
          "getFormatedDate": "2023-03-02",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 3,
          "getFormatedDate": "2023-03-03",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 4,
          "getFormatedDate": "2023-03-04",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 5,
          "getFormatedDate": "2023-03-05",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 6,
          "getFormatedDate": "2023-03-06",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 7,
          "getFormatedDate": "2023-03-07",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 8,
          "getFormatedDate": "2023-03-08",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 9,
          "getFormatedDate": "2023-03-09",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 10,
          "getFormatedDate": "2023-03-10",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 11,
          "getFormatedDate": "2023-03-11",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 12,
          "getFormatedDate": "2023-03-12",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 13,
          "getFormatedDate": "2023-03-13",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 14,
          "getFormatedDate": "2023-03-14",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 15,
          "getFormatedDate": "2023-03-15",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 16,
          "getFormatedDate": "2023-03-16",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 17,
          "getFormatedDate": "2023-03-17",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 18,
          "getFormatedDate": "2023-03-18",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 19,
          "getFormatedDate": "2023-03-19",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 20,
          "getFormatedDate": "2023-03-20",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 21,
          "getFormatedDate": "2023-03-21",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 22,
          "getFormatedDate": "2023-03-22",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 23,
          "getFormatedDate": "2023-03-23",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 24,
          "getFormatedDate": "2023-03-24",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 25,
          "getFormatedDate": "2023-03-25",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 26,
          "getFormatedDate": "2023-03-26",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 27,
          "getFormatedDate": "2023-03-27",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 28,
          "getFormatedDate": "2023-03-28",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 29,
          "getFormatedDate": "2023-03-29",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 30,
          "getFormatedDate": "2023-03-30",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 31,
          "getFormatedDate": "2023-03-31",
          "isFromChosenMonth": true,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 1,
          "getFormatedDate": "2023-04-01",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 2,
          "getFormatedDate": "2023-04-02",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 3,
          "getFormatedDate": "2023-04-03",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 4,
          "getFormatedDate": "2023-04-04",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 5,
          "getFormatedDate": "2023-04-05",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 6,
          "getFormatedDate": "2023-04-06",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 7,
          "getFormatedDate": "2023-04-07",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 8,
          "getFormatedDate": "2023-04-08",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 9,
          "getFormatedDate": "2023-04-09",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 10,
          "getFormatedDate": "2023-04-10",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 11,
          "getFormatedDate": "2023-04-11",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 12,
          "getFormatedDate": "2023-04-12",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 13,
          "getFormatedDate": "2023-04-13",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 14,
          "getFormatedDate": "2023-04-14",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 15,
          "getFormatedDate": "2023-04-15",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 16,
          "getFormatedDate": "2023-04-16",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 17,
          "getFormatedDate": "2023-04-17",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 18,
          "getFormatedDate": "2023-04-18",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 19,
          "getFormatedDate": "2023-04-19",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 20,
          "getFormatedDate": "2023-04-20",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 21,
          "getFormatedDate": "2023-04-21",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 22,
          "getFormatedDate": "2023-04-22",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 23,
          "getFormatedDate": "2023-04-23",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 24,
          "getFormatedDate": "2023-04-24",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 25,
          "getFormatedDate": "2023-04-25",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 26,
          "getFormatedDate": "2023-04-26",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 27,
          "getFormatedDate": "2023-04-27",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 28,
          "getFormatedDate": "2023-04-28",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 29,
          "getFormatedDate": "2023-04-29",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 30,
          "getFormatedDate": "2023-04-30",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 1,
          "getFormatedDate": "2023-05-01",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 2,
          "getFormatedDate": "2023-05-02",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 3,
          "getFormatedDate": "2023-05-03",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 4,
          "getFormatedDate": "2023-05-04",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 5,
          "getFormatedDate": "2023-05-05",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 6,
          "getFormatedDate": "2023-05-06",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        },
        {
          "getDate": 7,
          "getFormatedDate": "2023-05-07",
          "isFromChosenMonth": false,
          "isToday": false,
          "isChosenDate": false,
          "isFirstDayOfCurrentMonth": false,
          "isOutOfMinOrMaxRange": false
        }
      ]
    })

    it("should return the expected result if we set March 1 2023 as parameter", () => {
      const date = new Date(2023, 2, 1)
      const minDate = new Date(2020, 0, 1)
      const maxDate = null
      expect(getDates(date, minDate, maxDate)).toEqual(expectedResultFromMarch2023)
    })
  })
})

describe("getMonths helper", () => {
  describe("tests for 2020", () => {
    let expectedResultsFor2020: MonthsFormat[]

    beforeAll(() => {
      expectedResultsFor2020 = [
        {
          "getMonthAbbrev": "Jan",
          "getFormatedDate": "2019-01-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false,
          "isOutsideMonthRange": true
        },
        {
          "getMonthAbbrev": "Feb",
          "getFormatedDate": "2019-02-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false,
          "isOutsideMonthRange": true
        },
        {
          "getMonthAbbrev": "Mar",
          "getFormatedDate": "2019-03-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false,
          "isOutsideMonthRange": true
        },
        {
          "getMonthAbbrev": "Apr",
          "getFormatedDate": "2019-04-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false,
          "isOutsideMonthRange": true
        },
        {
          "getMonthAbbrev": "May",
          "getFormatedDate": "2019-05-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false,
          "isOutsideMonthRange": true
        },
        {
          "getMonthAbbrev": "Jun",
          "getFormatedDate": "2019-06-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false,
          "isOutsideMonthRange": true
        },
        {
          "getMonthAbbrev": "Jul",
          "getFormatedDate": "2019-07-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false,
          "isOutsideMonthRange": true
        },
        {
          "getMonthAbbrev": "Aug",
          "getFormatedDate": "2019-08-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false,
          "isOutsideMonthRange": true
        },
        {
          "getMonthAbbrev": "Sep",
          "getFormatedDate": "2019-09-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false,
          "isOutsideMonthRange": true
        },
        {
          "getMonthAbbrev": "Oct",
          "getFormatedDate": "2019-10-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false,
          "isOutsideMonthRange": true
        },
        {
          "getMonthAbbrev": "Nov",
          "getFormatedDate": "2019-11-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false,
          "isOutsideMonthRange": false
        },
        {
          "getMonthAbbrev": "Dec",
          "getFormatedDate": "2019-12-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false,
          "isOutsideMonthRange": false
        },
        {
          "getMonthAbbrev": "Jan",
          "getFormatedDate": "2020-01-01",
          "isFromChosenYear": true,
          "isCurrentMonth": false,
          "isChosenMonth": true,
          "isFirstMonthOfCurrentYear": true,
          "isOutsideMonthRange": false
        },
        {
          "getMonthAbbrev": "Feb",
          "getFormatedDate": "2020-02-01",
          "isFromChosenYear": true,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false,
          "isOutsideMonthRange": false
        },
        {
          "getMonthAbbrev": "Mar",
          "getFormatedDate": "2020-03-01",
          "isFromChosenYear": true,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false,
          "isOutsideMonthRange": false
        },
        {
          "getMonthAbbrev": "Apr",
          "getFormatedDate": "2020-04-01",
          "isFromChosenYear": true,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false,
          "isOutsideMonthRange": true
        },
        {
          "getMonthAbbrev": "May",
          "getFormatedDate": "2020-05-01",
          "isFromChosenYear": true,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false,
          "isOutsideMonthRange": true
        },
        {
          "getMonthAbbrev": "Jun",
          "getFormatedDate": "2020-06-01",
          "isFromChosenYear": true,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false,
          "isOutsideMonthRange": true
        },
        {
          "getMonthAbbrev": "Jul",
          "getFormatedDate": "2020-07-01",
          "isFromChosenYear": true,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false,
          "isOutsideMonthRange": true
        },
        {
          "getMonthAbbrev": "Aug",
          "getFormatedDate": "2020-08-01",
          "isFromChosenYear": true,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false,
          "isOutsideMonthRange": true
        },
        {
          "getMonthAbbrev": "Sep",
          "getFormatedDate": "2020-09-01",
          "isFromChosenYear": true,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false,
          "isOutsideMonthRange": true
        },
        {
          "getMonthAbbrev": "Oct",
          "getFormatedDate": "2020-10-01",
          "isFromChosenYear": true,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false,
          "isOutsideMonthRange": true
        },
        {
          "getMonthAbbrev": "Nov",
          "getFormatedDate": "2020-11-01",
          "isFromChosenYear": true,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false,
          "isOutsideMonthRange": true
        },
        {
          "getMonthAbbrev": "Dec",
          "getFormatedDate": "2020-12-01",
          "isFromChosenYear": true,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false,
          "isOutsideMonthRange": true
        },
        {
          "getMonthAbbrev": "Jan",
          "getFormatedDate": "2021-01-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false,
          "isOutsideMonthRange": true
        },
        {
          "getMonthAbbrev": "Feb",
          "getFormatedDate": "2021-02-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false,
          "isOutsideMonthRange": true
        },
        {
          "getMonthAbbrev": "Mar",
          "getFormatedDate": "2021-03-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false,
          "isOutsideMonthRange": true
        },
        {
          "getMonthAbbrev": "Apr",
          "getFormatedDate": "2021-04-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false,
          "isOutsideMonthRange": true
        },
        {
          "getMonthAbbrev": "May",
          "getFormatedDate": "2021-05-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false,
          "isOutsideMonthRange": true
        },
        {
          "getMonthAbbrev": "Jun",
          "getFormatedDate": "2021-06-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false,
          "isOutsideMonthRange": true
        },
        {
          "getMonthAbbrev": "Jul",
          "getFormatedDate": "2021-07-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false,
          "isOutsideMonthRange": true
        },
        {
          "getMonthAbbrev": "Aug",
          "getFormatedDate": "2021-08-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false,
          "isOutsideMonthRange": true
        },
        {
          "getMonthAbbrev": "Sep",
          "getFormatedDate": "2021-09-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false,
          "isOutsideMonthRange": true
        },
        {
          "getMonthAbbrev": "Oct",
          "getFormatedDate": "2021-10-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false,
          "isOutsideMonthRange": true
        },
        {
          "getMonthAbbrev": "Nov",
          "getFormatedDate": "2021-11-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false,
          "isOutsideMonthRange": true
        },
        {
          "getMonthAbbrev": "Dec",
          "getFormatedDate": "2021-12-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false,
          "isOutsideMonthRange": true
        },
        {
          "getMonthAbbrev": "Jan",
          "getFormatedDate": "2022-01-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false,
          "isOutsideMonthRange": true
        },
        {
          "getMonthAbbrev": "Feb",
          "getFormatedDate": "2022-02-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false,
          "isOutsideMonthRange": true
        },
        {
          "getMonthAbbrev": "Mar",
          "getFormatedDate": "2022-03-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false,
          "isOutsideMonthRange": true
        },
        {
          "getMonthAbbrev": "Apr",
          "getFormatedDate": "2022-04-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false,
          "isOutsideMonthRange": true
        },
        {
          "getMonthAbbrev": "May",
          "getFormatedDate": "2022-05-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false,
          "isOutsideMonthRange": true
        },
        {
          "getMonthAbbrev": "Jun",
          "getFormatedDate": "2022-06-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false,
          "isOutsideMonthRange": true
        },
        {
          "getMonthAbbrev": "Jul",
          "getFormatedDate": "2022-07-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false,
          "isOutsideMonthRange": true
        },
        {
          "getMonthAbbrev": "Aug",
          "getFormatedDate": "2022-08-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false,
          "isOutsideMonthRange": true
        },
        {
          "getMonthAbbrev": "Sep",
          "getFormatedDate": "2022-09-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false,
          "isOutsideMonthRange": true
        },
        {
          "getMonthAbbrev": "Oct",
          "getFormatedDate": "2022-10-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false,
          "isOutsideMonthRange": true
        },
        {
          "getMonthAbbrev": "Nov",
          "getFormatedDate": "2022-11-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false,
          "isOutsideMonthRange": true
        },
        {
          "getMonthAbbrev": "Dec",
          "getFormatedDate": "2022-12-01",
          "isFromChosenYear": false,
          "isCurrentMonth": false,
          "isChosenMonth": false,
          "isFirstMonthOfCurrentYear": false,
          "isOutsideMonthRange": true
        }
      ]
    })

    it("should return the expected result if set a date from 2020 as parameter", () => {
      const minDate = new Date(2019, 10, 11)
      const maxDate = new Date(2020, 2, 10)
      const date = new Date(2020, 0, 1)
      expect(getMonths(date, minDate, maxDate)).toEqual(expectedResultsFor2020)
    })
  })

})

describe("checkIfDatesAreIdentical helper", () => {
  it("Should return true for the same 2 dates", () => {
    const firstDate = new Date(2005, 2, 5)
    const secondDate = new Date(2005, 2, 5)
    expect(checkIfDatesAreIdentical(firstDate, secondDate)).toBe(true)
  })

  it("Should return false for 2 different dates", () => {
    const firstDate = new Date(2020, 10, 11)
    const secondDate = new Date(2006, 1, 5)
    expect(checkIfDatesAreIdentical(firstDate, secondDate)).toBe(false)
  })
})

describe("checkIfMonthsAreIdentical helper", () => {
  it("Should return true for 2 dates with the same month and year", () => {
    const firstDate = new Date(2010, 3, 5)
    const secondDate = new Date(2010, 3, 15)
    expect(checkIfMonthsAreIdentical(firstDate, secondDate)).toBe(true)
  })

  it("Should return false for 2 dates with the same month but different years", () => {
    const firstDate = new Date(2050, 1, 11)
    const secondDate = new Date(2006, 1, 5)
    expect(checkIfMonthsAreIdentical(firstDate, secondDate)).toBe(false)
  })

  it("Should return false if second argument is null", () => {
    const firstDate = new Date(2050, 1, 11)
    const secondDate = null
    expect(checkIfMonthsAreIdentical(firstDate, secondDate)).toBe(false)
  })
})

describe("checkIfYearsAreIdentical helper", () => {
  it("Should return true for 2 dates with the same year", () => {
    const firstDate = new Date(2050, 1, 11)
    const secondDate = new Date(2050, 6, 13)
    expect(checkIfYearsAreIdentical(firstDate, secondDate)).toBe(true)
  })

  it("Should return false for 2 dates with different years", () => {
    const firstDate = new Date(2055, 1, 11)
    const secondDate = new Date(2030, 6, 13)
    expect(checkIfYearsAreIdentical(firstDate, secondDate)).toBe(false)
  })

  it("Should return false if second argument is null", () => {
    const firstDate = new Date(2055, 1, 11)
    const secondDate = null
    expect(checkIfYearsAreIdentical(firstDate, secondDate)).toBe(false)
  })
})

describe("checkIfDateIsOutsideRange helper", () => {
  it("Should return false if date is between startDate and endDate", () => {
    const date = new Date("2020-10-10")
    const startDate = new Date("2015-01-01")
    const endDate = new Date("2050-02-02")

    expect(checkIfDateIsOutsideRange(date, startDate, endDate)).toBe(false)
  })

  it("Should return true if date is before startDate", () => {
    const date = new Date("2020-10-10")
    const startDate = new Date("2025-01-01")
    const endDate = new Date("2050-02-02")

    expect(checkIfDateIsOutsideRange(date, startDate, endDate)).toBe(true)
  })

  it("Should return true if date is after endDate", () => {
    const date = new Date("2100-10-10")
    const startDate = new Date("2025-01-01")
    const endDate = new Date("2050-02-02")

    expect(checkIfDateIsOutsideRange(date, startDate, endDate)).toBe(true)
  })

  it("Should return false if date is equal to startDate and below endDate", () => {
    const date = new Date("2020-10-10")
    const startDate = new Date("2020-10-10")
    const endDate = new Date("2050-02-02")

    expect(checkIfDateIsOutsideRange(date, startDate, endDate)).toBe(false)
  })

  it("Should return false if date is after startDate and equal to endDate", () => {
    const date = new Date("2020-10-10")
    const startDate = new Date("2020-10-10")
    const endDate = new Date("2050-02-02")

    expect(checkIfDateIsOutsideRange(date, startDate, endDate)).toBe(false)
  })

  it("Should return false if date is equal to startDate and endDate", () => {
    const date = new Date("2020-10-10")
    const startDate = new Date("2020-10-10")
    const endDate = new Date("2020-10-10")

    expect(checkIfDateIsOutsideRange(date, startDate, endDate)).toBe(false)
  })

  it("Should return false if date is equal to startDate but have less hour", () => {
    const date = new Date(2020, 10, 10, 1)
    const startDate = new Date(2020, 10, 10, 5)
    const endDate = new Date(2020, 10, 10)

    expect(checkIfDateIsOutsideRange(date, startDate, endDate)).toBe(false)
  })

  it("Should return false if date is equal to endDate but have more hours", () => {
    const date = new Date(2020, 10, 10, 11)
    const startDate = new Date(2018, 10, 10, 5)
    const endDate = new Date(2020, 10, 10, 2)

    expect(checkIfDateIsOutsideRange(date, startDate, endDate)).toBe(false)
  })
})

describe("checkIfOutsideMonthRange helper", () => {
  it("Should return false if monthDate is between startMonthDate and endMonthDate", () => {
    const monthDate = new Date("2020-05-10")
    const startMonthDate = new Date("2020-04-01")
    const endMonthDate = new Date("2050-07-02")

    expect(checkIfOutsideMonthRange(monthDate, startMonthDate, endMonthDate)).toBe(false)
  })

  it("Should return true if monthDate is before startMonthDate", () => {
    const monthDate = new Date("2019-11-23")
    const startMonthDate = new Date("2020-01-10")
    const endMonthDate = new Date("2050-02-02")

    expect(checkIfOutsideMonthRange(monthDate, startMonthDate, endMonthDate)).toBe(true)
  })

  it("Should return true if monthDate is after endMonthDate", () => {
    const monthDate = new Date("2050-03-02")
    const startMonthDate = new Date("2025-01-01")
    const endMonthDate = new Date("2050-02-02")

    expect(checkIfOutsideMonthRange(monthDate, startMonthDate, endMonthDate)).toBe(true)
  })

  it("Should return false if monthDate is equal to startMonthDate and below endMonthDate", () => {
    const monthDate = new Date("2020-10-10")
    const startMonthDate = new Date("2020-10-10")
    const endMonthDate = new Date("2020-11-02")

    expect(checkIfOutsideMonthRange(monthDate, startMonthDate, endMonthDate)).toBe(false)
  })

  it("Should return false if monthDate is after startMonthDate and equal to endMonthDate", () => {
    const monthDate = new Date("2020-11-10")
    const startMonthDate = new Date("2020-10-10")
    const endMonthDate = new Date("2020-11-10")

    expect(checkIfOutsideMonthRange(monthDate, startMonthDate, endMonthDate)).toBe(false)
  })

  it("Should return false if monthDate is equal to startMonthDate and endMonthDate", () => {
    const monthDate = new Date("2020-10-10")
    const startMonthDate = new Date("2020-10-10")
    const endMonthDate = new Date("2020-10-10")

    expect(checkIfOutsideMonthRange(monthDate, startMonthDate, endMonthDate)).toBe(false)
  })

  it("Should return false if monthDate is equal to startMonthDate but have less days", () => {
    const monthDate = new Date(2020, 10, 10)
    const startMonthDate = new Date(2020, 10, 20)
    const endMonthDate = new Date(2020, 10, 10)

    expect(checkIfOutsideMonthRange(monthDate, startMonthDate, endMonthDate)).toBe(false)
  })

  it("Should return false if monthDate is equal to endMonthDate but have more days", () => {
    const monthDate = new Date(2020, 10, 25)
    const startMonthDate = new Date(2020, 10, 20)
    const endMonthDate = new Date(2020, 10, 10)

    expect(checkIfOutsideMonthRange(monthDate, startMonthDate, endMonthDate)).toBe(false)
  })
})