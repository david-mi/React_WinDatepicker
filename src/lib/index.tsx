import Windate from "./WinDate/WinDate";
import GlobalProvider from "./Context/Global";
import type { ComponentProps } from "react";

type Color = string

export interface CalendarColors {
  background?: Color
  headerButtons?: Color
  headerButtonsHover?: Color
  weekDays?: Color
  datesButtonsBorderHover?: Color
  datesFromChosenMonthButtons?: Color
  datesFromChosenMonthButtonsBackground?: Color
  datesFromChosenMonthButtonsBorder?: Color
  datesOutsideChosenMonthButtons?: Color
  selectedDateButton?: Color
  selectedDateButtonBackground?: Color
  selectedDateButtonBorder?: Color
  todayButton?: Color
  todayButtonBackground?: Color
  todayButtonBorder?: Color
  todayButtonSecondBorder?: Color
  weekendsButtonsBackground?: Color
  disabledButtons?: Color
  disabledButtonsBackground?: Color
  clickedButton?: Color
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
    setTodayByDefault?: boolean
  }
}

export const WinDateWrapper = (props: Props) => {
  return (
    <GlobalProvider>
      <Windate {...props} />
    </GlobalProvider>
  )
}