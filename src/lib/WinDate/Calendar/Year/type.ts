export interface MonthsFormat {
  /** month date */
  getMonthAbbrev: string;
  /** date in YYYY-MM-DD format */
  getFormatedDate: string;
  /** set to false if the date comes from previous or next year */
  isFromChosenYear: boolean
  /** set to true if the date correspond to today */
  isCurrentMonth: boolean
  /** set to true if the date correspond to the selected date */
  isChosenMonth: boolean
  isFirstMonthOfCurrentYear: boolean
  isOutsideMonthRange: boolean
}