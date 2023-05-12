import { expect } from "vitest";
import { render, screen, getNodeText } from "@testing-library/react";
import Weekdays from "../../lib/WinDate/Calendar/Month/Weekdays/Weekdays";
import { weekDays } from "../../lib/langs";

describe("<WeekDays>", () => {
  it("Should display all days of the week as abbreviation", () => {
    render(<Weekdays />)
    const expectedRetrievedText = weekDays

    const weekDaysElements = screen.getAllByTestId("weekday")
    expect(weekDaysElements.map(getNodeText)).toEqual(expectedRetrievedText)
  })
})