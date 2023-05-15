import { expect, vi } from "vitest";
import { createRef, MutableRefObject } from "react"
import { render, screen, getNodeText } from "@testing-library/react";
import Dates from "../../lib/WinDate/Calendar/Month/Dates/Dates";
import { getDates } from "../../lib/WinDate/Calendar/Month/helper";

describe("<Dates>", () => {
  it("Should retrieve all getDate values in the document", () => {
    const date = new Date(2023, 4, 1)
    const minDate = new Date(2020, 0, 1)
    const maxDate = null
    const dates = getDates(date, minDate, maxDate)
    const getDatesValuesAsString: string[] = dates.map((date) => {
      return String(date.getDate)
    })

    const datesContainerRef = createRef<HTMLDivElement>()

    const props = {
      dates,
      ref: { current: null },
      setPreviousMonth: vi.fn(),
      setNextMonth: vi.fn(),
      shouldDisableNextMonth: false,
      shouldDisablePreviousMonth: false,
      datesContainerRef: datesContainerRef as MutableRefObject<HTMLDivElement>
    }

    render(<Dates {...props} />)
    const datesElements = screen.getAllByTestId("date")
    const dateElementsText = datesElements.map(getNodeText)

    expect(dateElementsText).toEqual(getDatesValuesAsString)
  })
})