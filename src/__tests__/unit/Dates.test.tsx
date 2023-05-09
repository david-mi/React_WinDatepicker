import { expect, vi } from "vitest";
import { render, screen, getNodeText } from "@testing-library/react";
import Dates from "../../lib/WinDate/Calendar/Month/Dates/Dates";
import { getDates } from "../../lib/WinDate/Calendar/Month/helper";

describe("<Dates>", () => {
  it("Should retrieve all getDate values in the document", () => {
    const date = new Date(2023, 4, 1)
    const dates = getDates(date)
    const getDatesValuesAsString: string[] = dates.map((date) => {
      return String(date.getDate)
    })

    const props = {
      dates,
      ref: { current: null },
      setPreviousMonth: vi.fn(),
      setNextMonth: vi.fn()
    }

    render(<Dates {...props} />)
    const datesElements = screen.getAllByTestId("date")
    const dateElementsText = datesElements.map(getNodeText)

    expect(dateElementsText).toEqual(getDatesValuesAsString)
  })
})