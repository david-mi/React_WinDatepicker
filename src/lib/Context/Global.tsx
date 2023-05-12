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
  updateInput: boolean
  setUpdateInput: Dispatch<SetStateAction<boolean>>
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
  updateInput: false,
  setUpdateInput: () => { }
})

export type Timeline = "MONTH" | "YEAR"

interface Props {
  children: ReactNode
}

const GlobalProvider = ({ children }: Props) => {
  const [date, setDate] = useState<Date>(new Date())
  const [isCalendarOpen, setIsCalendarOpen] = useState(false)
  const [timeline, setTimeline] = useState<Timeline>("MONTH")
  const [isSwitchingTimeline, setIsSwitchingTimeline] = useState(false)
  const [updateInput, setUpdateInput] = useState(false)

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
    updateInput,
    setUpdateInput
  }

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider