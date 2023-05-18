import { expect } from "vitest";
import { render, screen } from "@testing-library/react";
import DateButton from "../../lib/WinDate/Calendar/Month/Dates/DateButton/DateButton";
import type { DatesFormat } from "../../lib/WinDate/Calendar/Month/type";
import { formatDate } from "../../lib/WinDate/utils";

describe("<Date>", () => {
  let date: Date
  let dateProps: DatesFormat
  let dateButton: HTMLButtonElement

  beforeAll(() => {
    date = new Date()

    dateProps = {
      getDate: date.getDate(),
      getFormatedDate: formatDate(date),
      isFromChosenMonth: true,
      isToday: true,
      isChosenDate: true,
      isFirstDayOfCurrentMonth: false,
      isOutOfMinOrMaxRange: false,
      isWeekend: false
    }
  })

  beforeEach(() => {
    render(<DateButton date={dateProps} />)
    dateButton = screen.getByTestId("date")
  })

  describe("For true values", () => {
    describe("For a passed date props with isFromChosenMonth set to true", () => {
      it("Shoud have data-chosen-month boolean attribute corresponding to isFromChosenMonth", () => {
        const dataChosenMonthAttribute = dateButton.getAttribute("data-chosen-month")
        expect(dataChosenMonthAttribute).toBe("true")
      })
    })

    describe("For a passed date props with isToday set to true", () => {
      it("Shoud have data-today boolean attribute corresponding to isToday", () => {
        const dataTodayAttribute = dateButton.getAttribute("data-today")
        expect(dataTodayAttribute).toBe("true")
      })
    })

    describe("For a passed date props with isChosenDate set to true", () => {
      it("Shoud have data-chosen-date boolean attribute corresponding to isChosenDate", () => {
        const dataChosenDateAttribute = dateButton.getAttribute("data-chosen-date")
        expect(dataChosenDateAttribute).toBe("true")
      })
    })
  })

  describe("For false values", () => {
    beforeAll(() => {
      dateProps.isFromChosenMonth = false
      dateProps.isToday = false
      dateProps.isChosenDate = false
    })

    describe("For a passed date props with isFromChosenMonth set to false", () => {
      it("Shoud have data-chosen-month boolean attribute corresponding to isFromChosenMonth", () => {
        const dataChosenMonthAttribute = dateButton.getAttribute("data-chosen-month")
        expect(dataChosenMonthAttribute).toBe("false")
      })
    })

    describe("For a passed date props with isToday set to false", () => {
      it("Shoud have data-today boolean attribute corresponding to isToday", () => {
        const dataTodayAttribute = dateButton.getAttribute("data-today")
        expect(dataTodayAttribute).toBe("false")
      })
    })

    describe("For a passed date props with isChosenDate set to false", () => {
      it("Shoud have data-chosen-date boolean attribute corresponding to isChosenDate", () => {
        const dataChosenDateAttribute = dateButton.getAttribute("data-chosen-date")
        expect(dataChosenDateAttribute).toBe("false")
      })
    })
  })
})


