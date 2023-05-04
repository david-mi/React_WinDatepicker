export interface DatesFormat {
  /** day date */
  getDate: number;
  /** date in YYYY-MM-DD format */
  getFormatedDate: string;
  /** set to false if the date comes from previous or next month */
  isFromChosenMonth: boolean
  /** set to true if the date correspond to today */
  isToday: boolean
  /** set to true if the date correspond to the selected date */
  isChosenDate: boolean
  isFromPreviousMonth: boolean
  isFromNextMonth: boolean
}