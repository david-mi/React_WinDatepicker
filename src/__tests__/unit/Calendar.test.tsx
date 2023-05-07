import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import Calendar from "../../lib/WinDate/Calendar/Calendar";
import { GlobalContext, Timeline } from "../../lib/Context/Global"

describe("<Calendar />", () => {
  describe("When clicking on close-bg element", () => {
    it("Should call closeCalendar function from GlobalContext", () => {
      const contextValue = {
        date: new Date(),
        setDate: () => { },
        isCalendarOpen: true,
        openCalendar: vi.fn(),
        closeCalendar: vi.fn(),
        setTimeline: () => { },
        timeline: "MONTH" as Timeline,
        isSwitchingTimeline: false,
        setIsSwitchingTimeline: () => { }
      }

      render(
        <GlobalContext.Provider value={contextValue}>
          <Calendar />
        </GlobalContext.Provider>
      )

      const closeBgElement = screen.getByTestId("calendar-close-bg")
      expect(closeBgElement).toBeInTheDocument()
      fireEvent.click(closeBgElement)

      expect(contextValue.closeCalendar).toHaveBeenCalled()
    })
  })
})
