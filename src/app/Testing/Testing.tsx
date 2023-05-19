import React, { useState, ChangeEvent, useRef, useEffect } from "react";
import type { OnDateChange } from "../../lib";
import { WinDatePicker } from "../../lib"
// import { WinDatePicker } from "../../../dist/index";
import "./testing.css"

const Testing = () => {
  //@ts-ignore
  const [inputValue, setInputValue] = useState("")
  const myInputRef = useRef<HTMLInputElement>(null!)
  const myInputRef2 = useRef<HTMLInputElement>(null!)

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    console.log("change", event)
  }

  function handleClick(event: React.MouseEvent<HTMLInputElement>) {
    console.log("Clicked", event)
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    console.log("Key :" + event.key)
  }

  function handleBlur(event: React.FocusEvent<HTMLInputElement>) {
    console.log("Blur", event)
  }

  function handleFocus(event: React.FocusEvent<HTMLInputElement>) {
    console.log("Focused", event)
  }

  function handleDateChange(args: OnDateChange) {
    console.log(args)
    setInputValue(args.formatted)
  }

  useEffect(() => {
    console.log({ myInputRef: myInputRef.current })
    console.log({ myInputRef2: myInputRef2.current })
  }, [])

  return (
    <div>
      <WinDatePicker
        calendarColors={{
          background: "black",
          headerButtons: "white",
          headerButtonsHover: "#68dcff",
          weekDays: "white",
          datesButtonsBorderHover: "#68dcff",
          datesFromChosenMonthButtons: "#68dcff",
          datesFromChosenMonthButtonsBackground: "#222729",
          datesFromChosenMonthButtonsBorder: "white",
          datesOutsideChosenMonthButtons: "#264b57",
          selectedDateButton: "white",
          selectedDateButtonBackground: "#1e36bd",
          selectedDateButtonBorder: "#1e36bd",
          todayButton: "black",
          todayButtonBackground: "#68dcff",
          todayButtonBorder: "#1e36bd",
          todayButtonSecondBorder: "#000531",
          weekendsButtonsBackground: "#01102c",
          disabledButtons: "blue",
          disabledButtonsBackground: "blue"
        }}
        inputProps={{
          id: "super-id",
          role: "date",
          className: "dateInput",
          onChange: handleChange,
          onClick: handleClick,
          onKeyDown: handleKeyDown,
          onBlur: handleBlur,
          onFocus: handleFocus,
          ref: myInputRef,
          // defaultValue: "2002-05-05",
          onDateChange: handleDateChange,
          // setTodayByDefault: true,
          // min: "2023-03-22",
          max: "2023-09-22"
        }}
      />
      {/* <h1>Date: {inputValue}</h1> */}
    </div>

  )
}

export default Testing