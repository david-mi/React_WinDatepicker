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

export type OnDateChange = {
    /** "YYYY-MM-DD" format */
    formatted: string | ""
    /** Date format */
    raw: Date | null
}

export interface WinDatePickerProps {
    inputProps:
    /** Any react input props */
    ComponentProps<"input"> & {
        /** required date update callback */
        onDateChange: (date: OnDateChange) => any
        /** sets input value to today, default to false */
        setTodayByDefault?: boolean
    }
    calendarColors?: CalendarColors
}

export declare const WinDatePicker: (props: WinDatePickerProps) => JSX.Element;

export { };
