import React, { useState, ChangeEvent, useRef, useEffect } from "react";
import type { OnDateChangeProps } from "../lib";
import { WinDateWrapper } from "../lib"
// import { WinDateWrapper } from "../../dist/index";
import "./index.css"

const App = () => {
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

  function handleDateChange(args: OnDateChangeProps) {
    console.log(args)
    setInputValue(args.formatted)
  }

  useEffect(() => {
    console.log({ myInputRef: myInputRef.current })
    console.log({ myInputRef2: myInputRef2.current })
  }, [])

  return (
    <div>
      <WinDateWrapper
        calendarColors={{
          // background: "orange",
          // headerButtonsText: "red",
          // headerButtonsTextHover: "green",
          // weekDaysText: "purple",
          // chosenButtonText: "aqua",
          // chosenBorder: "red",
          // currentButtonBackground: "blue",
          // currentButtonBorder: "green",
          // currentButtonSecondBorder: "orange",
          // notCurrentButtonText: "yellow",
          // buttonBorderHover: "blue",
          // disabled: "red",
          // disabledBackground: "rgb(235, 235, 235)"
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
          min: "2023-03-22",
          max: "2023-09-22"
        }}
      />
      <h1>Date: {inputValue}</h1>
    </div>

  )
}

export default App