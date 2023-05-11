import Windate from "./WinDate/WinDate";
import GlobalProvider from "./Context/Global";
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

export interface Props {
  calendarColors?: CalendarColors
}

export const WinDateWrapper = (props: Props) => {
  return (
    <GlobalProvider>
      <Windate {...props} />
    </GlobalProvider>
  )
}