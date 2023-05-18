import type { MutableRefObject } from "react"

/**
 * Defines calendar position (below of above input), based on available visible space
 * above and below it
 * 
 * - Calendar will be set above input only if there is enough visible space above input but not below 
 */

export function defineCalendarVerticalPosition(dateInputRef: MutableRefObject<HTMLInputElement>) {
  const {
    bottom: inputBottom,
    top: inputTop
  } = dateInputRef.current.getBoundingClientRect()
  const visibleSpaceAboveInput = inputTop
  const visibleSpaceUnderInput = window.innerHeight - inputBottom
  const calendarOffset = 10
  const calendarHeight = 345
  const neededSpaceForCalendar = calendarHeight + calendarOffset

  const canPutCalendarOnTop = visibleSpaceAboveInput > neededSpaceForCalendar
  const canPutCalendarOnBottom = visibleSpaceUnderInput >= neededSpaceForCalendar
  const calendarVerticalPosition = canPutCalendarOnBottom === false && canPutCalendarOnTop
    ? "TOP"
    : "BOTTOM"

  return calendarVerticalPosition
}
