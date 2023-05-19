import { useContext, forwardRef, ForwardedRef } from "react"
import { GlobalContext } from "../../../../../Context/Global"
import type { MonthsFormat } from "../../type"
import { handleTimeout } from "../../../../utils"
import styles from "./monthButton.module.css"

interface Props {
  month: MonthsFormat
}

const MonthButton = forwardRef(({ month }: Props, ref: ForwardedRef<HTMLButtonElement | null>) => {
  const {
    getMonthAbbrev,
    getFormatedDate,
    isFromChosenYear,
    isCurrentMonth,
    isChosenMonth,
    isOutsideMonthRange
  } = month

  const { setDate, setTimeline, setIsSwitchingTimeline } = useContext(GlobalContext)

  /** Gets called right after a month is clicked */

  function preTimeoutCallback() {
    setIsSwitchingTimeline(true)
  }

  /** Update date state with clicked month from calendar, once the timeout is done */

  function timeoutCallback() {
    const newDate = new Date(getFormatedDate)
    setDate(newDate)
    setTimeline("MONTH")
    setIsSwitchingTimeline(false)
  }

  return (
    <button
      ref={ref}
      data-testid="month"
      data-current-month={isCurrentMonth}
      data-chosen-year={isFromChosenYear}
      data-chosen-month={isChosenMonth}
      type="button"
      className={styles.month}
      onClick={handleTimeout({ timeoutCallback, preTimeoutCallback, delay: 200 })}
      disabled={isOutsideMonthRange}
    >
      {getMonthAbbrev}
    </button>
  )
})

export default MonthButton