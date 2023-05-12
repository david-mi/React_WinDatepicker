import Windate from "./WinDate/WinDate";
import GlobalProvider from "./Context/Global";
import type { ComponentProps } from "react";
import "./styles/global.css"

type Color = string

export interface CalendarColors {
  /** background color behind calendar */
  background?: Color
  closeBackground?: Color
  headerButtonsText?: Color
  headerButtonsTextHover?: Color
  weekDaysText?: Color
  chosenButtonText?: Color
  /** border color of chosen day / month */
  chosenBorder?: Color
  /** text color of today / current month */
  currentButtonBackground?: Color
  currentButtonBorder?: Color
  currentButtonSecondBorder?: Color
  notCurrentButtonText?: Color
  buttonBorderHover?: Color
}

export type OnDateChangeProps = {
  /** updated Date formatted to "YYYY-MM-DD" string */
  formatted: string | ""
  /** updated Date */
  raw: Date | null
}

export interface Props {
  /** Custom colors to apply on calendar */
  calendarColors?: CalendarColors
  /** 
   * Props to apply on date input 
   * 
   * - accept all react input props and a onDateChange callback
   */
  inputProps: ComponentProps<"input"> & {
    /** Gets called whenever date gets updated from input or calendar */
    onDateChange: (date: OnDateChangeProps) => any
    /** sets input value to today by default, set to false by default */
    setTodayByDefault: boolean
  }
}

export const WinDateWrapper = (props: Props) => {
  return (
    <GlobalProvider>
      <Windate {...props} />
    </GlobalProvider>
  )
}