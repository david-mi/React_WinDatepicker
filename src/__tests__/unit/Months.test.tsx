import { expect, vi } from "vitest";
import { createRef } from "react"
import { render, screen, getNodeText } from "@testing-library/react";
import Months from "../../lib/WinDate/Calendar/Year/Months/Months";
import { getMonths } from "../../lib/WinDate/Calendar/Year/helper";

describe("<Months>", () => {
  it("Should retrieve all 48 months abbrevs in the document", () => {
    const date = new Date(2023, 4, 1)
    const minDate = new Date(2020, 0, 1)
    const maxDate = null
    const months = getMonths(date, minDate, maxDate)
    const getMonthsAbbrevs: string[] = months.map((date) => date.getMonthAbbrev)
    const expectedLength = 16 * 3

    const monthsContainerRef = createRef<HTMLDivElement>()

    const props = {
      months,
      ref: { current: null },
      setPreviousYear: vi.fn(),
      setNextYear: vi.fn(),
      shouldDisableNextYear: false,
      shouldDisablePreviousYear: false,
      monthsContainerRef: monthsContainerRef as MutableRefObject<HTMLDivElement>
    }

    render(<Months {...props} />)
    const monthButtons = screen.getAllByTestId("month")
    const monthsButtonsText = monthButtons.map(getNodeText)

    expect(monthButtons).toHaveLength(expectedLength)
    expect(monthsButtonsText).toEqual(getMonthsAbbrevs)
  })
})