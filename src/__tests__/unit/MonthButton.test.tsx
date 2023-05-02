import { expect } from "vitest";
import { render, screen } from "@testing-library/react";
import MonthButton from "../../lib/WinDate/Calendar/Year/Months/MonthButton/MonthButton";
import type { MonthsFormat } from "../../lib/WinDate/Calendar/Year/type";
import { formatDate } from "../../lib/WinDate/utils";
import { monthAbbrev } from "../../lib/WinDate/Calendar/Year/helper";

describe("<Date>", () => {
  let date: Date
  let monthProps: MonthsFormat
  let monthButton: HTMLButtonElement

  beforeAll(() => {
    date = new Date()

    monthProps = {
      getMonthAbbrev: monthAbbrev[0],
      getFormatedDate: formatDate(date),
      isFromChosenYear: true,
      isCurrentMonth: true,
      isChosenMonth: true
    }
  })

  beforeEach(() => {
    render(<MonthButton month={monthProps} />)
    monthButton = screen.getByTestId("month")
  })

  describe("For true values", () => {
    describe("For a passed month props with isFromChosenYear set to true", () => {
      it("Shoud have data-chosen-year boolean attribute corresponding to isFromChosenYear", () => {
        const dataChosenYearAttribute = monthButton.getAttribute("data-chosen-year")
        expect(dataChosenYearAttribute).toBe("true")
      })
    })

    describe("For a passed month props with isCurrentMonth set to true", () => {
      it("Shoud have data-current-month boolean attribute corresponding to isCurrentMonth", () => {
        const dataCurrentMonthAttribute = monthButton.getAttribute("data-current-month")
        expect(dataCurrentMonthAttribute).toBe("true")
      })
    })

    describe("For a passed month props with isChosenMonth set to true", () => {
      it("Shoud have data-chosen-month boolean attribute corresponding to isChosenMonth", () => {
        const dataChosenMonthAttribute = monthButton.getAttribute("data-chosen-month")
        expect(dataChosenMonthAttribute).toBe("true")
      })
    })
  })

  describe("For false values", () => {
    beforeAll(() => {
      monthProps.isFromChosenYear = false
      monthProps.isCurrentMonth = false
      monthProps.isChosenMonth = false
    })

    describe("For a passed month props with isFromChosenYear set to false", () => {
      it("Shoud have data-chosen-year boolean attribute corresponding to isFromChosenYear", () => {
        const dataChosenYearAttribute = monthButton.getAttribute("data-chosen-year")
        expect(dataChosenYearAttribute).toBe("false")
      })
    })

    describe("For a passed month props with isCurrentMonth set to false", () => {
      it("Shoud have data-current-month boolean attribute corresponding to isCurrentMonth", () => {
        const dataCurrentMonthAttribute = monthButton.getAttribute("data-current-month")
        expect(dataCurrentMonthAttribute).toBe("false")
      })
    })

    describe("For a passed month props with isChosenMonth set to false", () => {
      it("Shoud have data-chosen-month boolean attribute corresponding to isChosenMonth", () => {
        const dataChosenMonthAttribute = monthButton.getAttribute("data-chosen-month")
        expect(dataChosenMonthAttribute).toBe("false")
      })
    })
  })
})


