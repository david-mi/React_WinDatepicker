import { expect } from "vitest";
import { render, screen, getNodeText } from "@testing-library/react";
import Months from "../../lib/WinDate/Calendar/Year/Months/Months";
import { getMonths } from "../../lib/WinDate/Calendar/Year/helper";

describe("<Months>", () => {
  it("Should retrieve all getMonthAbbrev values on the document", () => {
    const date = new Date(2023, 4, 1)
    const dates = getMonths(date)
    const getMonthsAbbrevs: string[] = dates.map((date) => date.getMonthAbbrev)
    const expectedLength = 16

    render(<Months months={dates} />)
    const monthButtons = screen.getAllByTestId("month")
    const monthsButtonsText = monthButtons.map(getNodeText)

    expect(monthButtons).toHaveLength(expectedLength)
    expect(monthsButtonsText).toEqual(getMonthsAbbrevs)
  })
})