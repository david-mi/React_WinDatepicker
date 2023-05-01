import { expect } from "vitest";
import { render, screen, getNodeText } from "@testing-library/react";
import Dates from "../../lib/WinDate/Calendar/Month/Dates/Dates";
import { getDates } from "../../lib/WinDate/Calendar/Month/helper";

describe("<Dates>", () => {
  it("Should page with all getDates values from getDates", () => {
    const date = new Date(2023, 4, 1)
    const dates = getDates(date)
    const getDatesValuesAsString: string[] = dates.map((date) => {
      return String(date.getDate)
    })
    const expectedLength = 42

    render(<Dates dates={dates} />)
    const datesElements = screen.getAllByTestId("date")
    const dateElementsText = datesElements.map(getNodeText)

    expect(datesElements).toHaveLength(expectedLength)
    expect(dateElementsText).toEqual(getDatesValuesAsString)
  })
})