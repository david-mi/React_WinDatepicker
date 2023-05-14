import type { MutableRefObject } from "react"

/**
 * Defines calendar position (below of above input), based on date input position
 * and remaining visible space above and below it
 * 
 * - Calendar will be set to top only if there is enough space above input but not below 
 */

export function defineCalendarPosition(dateInputRef: MutableRefObject<HTMLInputElement>) {
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
  const calendarPosition = canPutCalendarOnBottom === false && canPutCalendarOnTop
    ? "TOP"
    : "BOTTOM"

  return calendarPosition
}