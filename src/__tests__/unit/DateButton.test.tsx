import { expect } from "vitest";
import { render, screen } from "@testing-library/react";
import DateButton from "../../lib/WinDate/Calendar/Month/Dates/DateButton/DateButton";
import type { DatesFormat } from "../../lib/WinDate/Calendar/Month/type";
import { formatDate } from "../../lib/WinDate/utils";

describe("<Date>", () => {
  let date: Date
  let dateProps: DatesFormat
  let dateElement: HTMLButtonElement

  beforeAll(() => {
    date = new Date()

    dateProps = {
      getDate: date.getDate(),
      getFormatedDate: formatDate(date),
      isFromChosenMonth: true,
      isToday: true,
      isChosenDate: true
    }
  })

  beforeEach(() => {
    render(<DateButton date={dateProps} />)
    dateElement = screen.getByTestId("date")
  })

  describe("For true values", () => {
    describe("For a passed date props with isFromChosenMonth set to true", () => {
      it("Shoud have data-chosen-month boolean attribute corresponding to isToday", () => {
        const dataChosenMonthAttribute = dateElement.getAttribute("data-chosen-month")
        expect(dataChosenMonthAttribute).toBe("true")
      })
    })

    describe("For a passed date props with isToday set to true", () => {
      it("Shoud have data-today boolean attribute corresponding to isToday", () => {
        const dataTodayBooleanAttribute = dateElement.getAttribute("data-today")
        expect(dataTodayBooleanAttribute).toBe("true")
      })
    })

    describe("For a passed date props with isChosenDate set to true", () => {
      it("Shoud have data-chosen-date boolean attribute corresponding to isChosenDate", () => {
        const dataChosenDateBooleanAttribute = dateElement.getAttribute("data-chosen-date")
        expect(dataChosenDateBooleanAttribute).toBe("true")
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
      it("Shoud have data-chosen-month boolean attribute corresponding to isToday", () => {
        const dataChosenMonthAttribute = dateElement.getAttribute("data-chosen-month")
        expect(dataChosenMonthAttribute).toBe("false")
      })
    })

    describe("For a passed date props with isToday set to false", () => {
      it("Shoud have data-today boolean attribute corresponding to isToday", () => {
        const dataTodayBooleanAttribute = dateElement.getAttribute("data-today")
        expect(dataTodayBooleanAttribute).toBe("false")
      })
    })

    describe("For a passed date props with isChosenDate set to false", () => {
      it("Shoud have data-chosen-date boolean attribute corresponding to isChosenDate", () => {
        const dataChosenDateBooleanAttribute = dateElement.getAttribute("data-chosen-date")
        expect(dataChosenDateBooleanAttribute).toBe("false")
      })
    })
  })
})


