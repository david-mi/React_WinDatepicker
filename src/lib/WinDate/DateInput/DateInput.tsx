import {
  useEffect,
  useRef,
  useContext,
  KeyboardEvent,
  FocusEvent,
  MouseEvent,
  MutableRefObject,
  ChangeEvent
} from "react"
import { GlobalContext } from "../../Context/Global"
import type { Props as WinDateProps } from "../../index"
import { formatDate, getValidDateOrNull } from "../utils"
import styles from "./dateInput.module.css"
import InputButton from "./Button/InputButton"

type Props = Pick<WinDateProps, "inputProps"> & {
  dateInputRef: MutableRefObject<HTMLInputElement>
}

const DateInput = ({ inputProps, dateInputRef }: Props) => {
  const {
    onDateChange,
    setTodayByDefault = false,
    onChange,
    onClick,
    onKeyDown,
    onBlur,
    onFocus,
    ...propsToApply
  } = inputProps
  const { date, setDate, openCalendar, setMinDate, setMaxDate } = useContext(GlobalContext)
  const isFocusingInputRef = useRef<boolean | undefined>()

  /**
  * Update date based on input value
  * 
  * - if retrieved date is null, add the current date
  * - calls onChange props if defined
  * - calls onDateChange
  */

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const targetDate = event.target.valueAsDate

    if (onChange !== undefined) {
      onChange(event)
    }

    onDateChange({
      formatted: targetDate ? dateInputRef.current.value : "",
      raw: targetDate ? new Date(dateInputRef.current.value) : null
    })

    const newDate = targetDate
      ? new Date(targetDate)
      : new Date()

    setDate(newDate)
  }

  /**
   * Prevents opening the native browser calendar
   * 
   * - calls onClick props if defined
   */

  function handleClick(event: MouseEvent<HTMLInputElement>) {
    event.preventDefault()

    if (onClick !== undefined) {
      onClick(event)
    }
  }

  /**
   * Open calendar component instead of opening the native browser calendar
   * when pressing enter on focused calendar icon
   * 
   * - calls onKeyDown props if defined
   */

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    const key = event.key

    if (key === "Enter") {
      event.preventDefault()
      openCalendar()
    }

    if (onKeyDown !== undefined) {
      onKeyDown(event)
    }
  }

  /**
   * Sets isFocusingInputRef.current to false so useEffect callback can update input Value
   * 
   * - calls onBlur props if defined
   */

  function handleBlur(event: FocusEvent<HTMLInputElement>) {
    isFocusingInputRef.current = false

    if (onBlur !== undefined) {
      onBlur(event)
    }
  }

  /**
   * Sets isFocusingInputRef.current to true
   * 
   * - calls onFocus props if defined
   */

  function handleFocus(event: FocusEvent<HTMLInputElement>) {
    isFocusingInputRef.current = true

    if (onFocus !== undefined) {
      onFocus(event)
    }
  }

  /**
   * - set dataInputRef.current value
   * - if inputProps.ref exists, assign element to its current value
   */

  function handleRefs(element: HTMLInputElement) {
    dateInputRef.current = element
    if (inputProps.ref !== undefined) {
      if (typeof inputProps.ref === "function") {
        inputProps.ref(element)
      } else {
        (inputProps.ref as MutableRefObject<HTMLInputElement>).current = element
      }
    }
  }

  useEffect(() => {
    /**
     * Handle date that will be set on initial render
     * - Set min and max date
     */

    const minDate = getValidDateOrNull(new Date(dateInputRef.current.min)) || new Date("0001-01-01")
    const maxDate = getValidDateOrNull(new Date(dateInputRef.current.max))
    const today = new Date()
    const maxDateIsBeforeToday = maxDate !== null && maxDate < today
    const minDateIsAfterToday = minDate > today
    const dateInputIsNotEmpty = dateInputRef.current.value !== ""

    if (setTodayByDefault) {
      dateInputRef.current.value = formatDate(new Date())
    } else if (dateInputIsNotEmpty) {
      setDate(new Date(dateInputRef.current.value))
    } else if (maxDateIsBeforeToday) {
      setDate(maxDate)
    } else if (minDateIsAfterToday) {
      setDate(minDate)
    }

    setMinDate(minDate)
    setMaxDate(maxDate)
  }, [])

  useEffect(() => {
    /** Update dateInput value if a date has been clicked from calendar */

    if (isFocusingInputRef.current === false) {
      dateInputRef.current.value = formatDate(date)
      onDateChange({
        formatted: dateInputRef.current.value,
        raw: new Date(dateInputRef.current.value)
      })
    }
  }, [date])

  return (
    <div className={styles.container}>
      <input
        {...propsToApply}
        type="date"
        ref={handleRefs}
        onChange={handleChange}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        onFocus={handleFocus}
      />
      <InputButton dateInputRef={dateInputRef} isFocusingInputRef={isFocusingInputRef} />
    </div>
  )
}
export default DateInput