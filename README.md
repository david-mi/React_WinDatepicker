# React WinDate v1.1!
![Calendar gif demo](public/demo_gif.gif)

## Description

A react custom date input with windows calendar skin

## Installation
```bash
npm i react-windate
```
## Configuration

## Usage
```js
import { WinDateWrapper } from "react-windate";
```

## Options
```js
interface CalendarColors {
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
}

type OnDateChangeProps = {
    /** updated Date formatted to "YYYY-MM-DD" string */
    formatted: string | "";
    /** updated Date */
    raw: Date | null;
};

interface Props {
    /** Custom colors to apply on calendar */
    calendarColors?: CalendarColors;
    /**
     * Props to apply on date input
     *
     * - accept all react input props and a onDateChange callback
     */
    inputProps: ComponentProps<"input"> & {
        /** Gets called whenever date gets updated from input or calendar */
        onDateChange: (date: OnDateChangeProps) => any;
        /** sets input value to today by default, set to false by default */
        setTodayByDefault: boolean;
    };
}
```

## Examples
### Basic usage


