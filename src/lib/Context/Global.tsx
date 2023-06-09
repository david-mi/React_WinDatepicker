import type { ReactNode, Dispatch, SetStateAction } from "react";
import { createContext, useState } from "react";

interface Context {
  date: Date
  setDate: Dispatch<SetStateAction<Date>>
  isCalendarOpen: boolean
  openCalendar: () => void
  closeCalendar: () => void
  setTimeline: Dispatch<SetStateAction<Timeline>>
  timeline: Timeline
  isSwitchingTimeline: boolean
  setIsSwitchingTimeline: Dispatch<SetStateAction<boolean>>
  setCalendarVerticalPosition: Dispatch<SetStateAction<CalendarVerticalPosition>>
  calendarVerticalPosition: CalendarVerticalPosition
  minDate: Date
  setMinDate: Dispatch<SetStateAction<Date>>
  maxDate: Date | null
  setMaxDate: Dispatch<SetStateAction<Date | null>>
}

export const GlobalContext = createContext<Context>({
  date: new Date(),
  setDate: () => { },
  isCalendarOpen: false,
  openCalendar: () => null,
  closeCalendar: () => null,
  setTimeline: () => { },
  timeline: "MONTH",
  isSwitchingTimeline: false,
  setIsSwitchingTimeline: () => { },
  setCalendarVerticalPosition: () => { },
  calendarVerticalPosition: "BOTTOM",
  minDate: new Date("0001-01-01"),
  setMinDate: () => { },
  maxDate: null,
  setMaxDate: () => { },
})

export type Timeline = "MONTH" | "YEAR"
type CalendarVerticalPosition = "TOP" | "BOTTOM"

interface Props {
  children: ReactNode
}

const GlobalProvider = ({ children }: Props) => {
  const [date, setDate] = useState<Date>(new Date())
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)
  const [timeline, setTimeline] = useState<Timeline>("MONTH")
  const [isSwitchingTimeline, setIsSwitchingTimeline] = useState(false)
  const [calendarVerticalPosition, setCalendarVerticalPosition] = useState<CalendarVerticalPosition>("BOTTOM")
  const [minDate, setMinDate] = useState<Date>(new Date("0001-01-01"))
  const [maxDate, setMaxDate] = useState<Date | null>(null)

  function openCalendar() {
    setIsCalendarOpen(true)
  }

  function closeCalendar() {
    setIsCalendarOpen(false)
  }

  const contextValue = {
    date,
    setDate,
    isCalendarOpen,
    openCalendar,
    closeCalendar,
    setTimeline,
    timeline,
    isSwitchingTimeline,
    setIsSwitchingTimeline,
    calendarVerticalPosition,
    setCalendarVerticalPosition,
    minDate,
    setMinDate,
    maxDate,
    setMaxDate
  }

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider