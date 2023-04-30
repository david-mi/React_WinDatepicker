import { expect } from "vitest";
import { render, screen, getNodeText } from "@testing-library/react";
import Weekdays from "../../lib/WinDate/Month/Weekdays/Weekdays";

describe("<WeekDays>", () => {
  it("Should display all days of the week as abbreviation", () => {
    render(<Weekdays />)
    const expectedRetrievedText = ["lu", "ma", "me", "je", "ve", "sa", "di"]

    const weekDaysElements = screen.getAllByTestId("weekday")
    expect(weekDaysElements.map(getNodeText)).toEqual(expectedRetrievedText)
  })
})