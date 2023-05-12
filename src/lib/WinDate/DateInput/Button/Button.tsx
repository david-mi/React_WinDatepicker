import { useContext, useRef, forwardRef, useLayoutEffect, MutableRefObject } from "react"
import { GlobalContext } from "../../../Context/Global"
import styles from "./button.module.css"

const Button = forwardRef<HTMLInputElement>((_, dateInputRef) => {
  const { setTimeline, openCalendar } = useContext(GlobalContext)
  const buttonRef = useRef<HTMLButtonElement>(null!)

  function handleClick() {
    setTimeline("MONTH")
    openCalendar()
  }

  useLayoutEffect(() => {
    const inputComputedStyle = getComputedStyle((dateInputRef as MutableRefObject<HTMLInputElement>).current)
    const inputPaddingLeft = inputComputedStyle.getPropertyValue("padding-right")

    buttonRef.current.style.right = inputPaddingLeft
  }, [dateInputRef])

  return (
    <button
      onClick={handleClick}
      ref={buttonRef}
      className={styles.button}
    >
    </button>
  )
})

export default Button