import { expect, vi } from "vitest";
import { render, screen, getNodeText } from "@testing-library/react";
import Months from "../../lib/WinDate/Calendar/Year/Months/Months";
import { getMonths } from "../../lib/WinDate/Calendar/Year/helper";

describe("<Months>", () => {
  it("Should retrieve all 48 months abbrevs in the document", () => {
    const date = new Date(2023, 4, 1)
    const months = getMonths(date)
    const getMonthsAbbrevs: string[] = months.map((date) => date.getMonthAbbrev)
    const expectedLength = 16 * 3

    const props = {
      months,
      ref: { current: null },
      setPreviousYear: vi.fn(),
      setNextYear: vi.fn()
    }

    render(<Months {...props} />)
    const monthButtons = screen.getAllByTestId("month")
    const monthsButtonsText = monthButtons.map(getNodeText)

    expect(monthButtons).toHaveLength(expectedLength)
    expect(monthsButtonsText).toEqual(getMonthsAbbrevs)
  })
})