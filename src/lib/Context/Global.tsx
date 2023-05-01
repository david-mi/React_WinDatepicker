import type { ReactNode, Dispatch, SetStateAction } from "react";
import { createContext, useState } from "react";

interface Context {
  date: Date
  setDate: Dispatch<SetStateAction<Date>>
  openCalendar: boolean
  setOpenCalendar: Dispatch<SetStateAction<boolean>>
}

export const GlobalContext = createContext<Context>({
  date: new Date(),
  setDate: () => { },
  openCalendar: false,
  setOpenCalendar: () => { },
})

interface Props {
  children: ReactNode
}

const GlobalProvider = ({ children }: Props) => {
  const [date, setDate] = useState<Date>(new Date())
  const [openCalendar, setOpenCalendar] = useState(false)

  return (
    <GlobalContext.Provider value={{ date, setDate, openCalendar, setOpenCalendar }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider