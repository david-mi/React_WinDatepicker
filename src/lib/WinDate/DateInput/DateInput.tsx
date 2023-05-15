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
import { formatDate } from "../utils"
import styles from "./dateInput.module.css"
import Button from "./Button/Button"

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
  }
    = inputProps
  const { date, setDate, openCalendar, updateInput, setMinDate, setMaxDate } = useContext(GlobalContext)
  // const dateInputRef = useRef<HTMLInputElement>(null!)
  const editFromInput = useRef(false)

  /**
  * Update date from retrieved date from input
  * 
  * - if retrieved date is null, add the current date
  * - handle onChange props if defined
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
   * Prevents opening the navigator calendar
   * 
   * - handle onClick props if defined
   */

  function handleClick(event: MouseEvent<HTMLInputElement>) {
    event.preventDefault()

    if (onClick !== undefined) {
      onClick(event)
    }
  }

  /**
   * Open calendar component instead of opening the navigator calendar
   * when pressing enter on focused calendar icon
   * 
   * - handle onKeyDown props if defined
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
   * Sets editFromInput.current to false so useEffect callback can update input Value
   * 
   * - handle onBlur props if defined
   */

  function handleBlur(event: FocusEvent<HTMLInputElement>) {
    editFromInput.current = false

    if (onBlur !== undefined) {
      onBlur(event)
    }
  }

  /**
   * Sets editFromInput.current to true
   * 
   * - handle onFocus props if defined
   */

  function handleFocus(event: FocusEvent<HTMLInputElement>) {
    editFromInput.current = true

    if (onFocus !== undefined) {
      onFocus(event)
    }
  }

  /**
   * - set dataInputRef current value
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
    const minDate = getDateOrNull(new Date(dateInputRef.current.min))
    const maxDate = getDateOrNull(new Date(dateInputRef.current.max))

    if (setTodayByDefault) {
      dateInputRef.current.value = formatDate(new Date())
    } else if (dateInputRef.current.value !== "") {
      setDate(new Date(dateInputRef.current.value))
    } else if (minDate !== null) {
      setDate(minDate)
    }

    if (minDate !== null) {
      setMinDate(minDate)
    }

    setMaxDate(maxDate)
  }, [])

  function getDateOrNull(date: Date) {
    return date instanceof Date && !isNaN(date)
      ? date
      : null
  }


  useEffect(() => {
    const minDate = getDateOrNull(new Date(dateInputRef.current.min))
    const maxDate = getDateOrNull(new Date(dateInputRef.current.max))
    console.log({ minDate, maxDate })
  }, [])


  useEffect(() => {
    /** Change input value only if date edition is not coming from input */
    if (editFromInput.current === false && updateInput) {
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
      <Button ref={dateInputRef} />
    </div>
  )
}
export default DateInput