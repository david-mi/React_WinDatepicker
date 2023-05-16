import React from "react"
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { WinDateWrapper } from "../../../lib";

const code = `
const App = () => {
  
  function handleDateChange(date) {
    console.log(date)
  }

  return (
    <WinDateWrapper
    inputProps={{
      onDateChange: handleDateChange
    }}
  />
  )
}`

const Basic = () => {
  function handleDateChange(date) {
    console.log(date)
  }

  return (
    <div className="example">
      <h2 className="example-title">Basic</h2>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        className="example-code"
      >
        {code}
      </SyntaxHighlighter>
      <WinDateWrapper
        inputProps={{
          onDateChange: handleDateChange
        }}
      />
    </div>
  )
}
export default Basic