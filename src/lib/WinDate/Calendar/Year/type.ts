export interface MonthsFormat {
  /** month abbrev name */
  getMonthAbbrev: string;
  /** date in YYYY-MM-DD format */
  getFormatedDate: string;
  /** set to false if the month is from a different year than the chosen one */
  isFromChosenYear: boolean
  /** set to true if the month correspond to the one from today */
  isCurrentMonth: boolean
  /** set to true if the month correspond to the selected date */
  isChosenMonth: boolean
  isFirstMonthOfCurrentYear: boolean
  /** set to true if the month is out of min-max date range */
  isOutsideMonthRange: boolean
}