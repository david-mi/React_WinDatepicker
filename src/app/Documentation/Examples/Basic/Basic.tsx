import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { WinDatePicker } from "../../../../lib";
import type { OnDateChange } from "../../../../lib";

const code = `\
const App = () => {
  
  function handleDateChange(date) {
    console.log(date)
  }

  return (
    <WinDatePicker
    inputProps={{
      onDateChange: handleDateChange
    }}
  />
  )
}`

const Basic = () => {
  function handleDateChange(date: OnDateChange) {
    console.log(date)
  }

  return (
    <div id="basic" className="example">
      <h2 className="example-title">Basic</h2>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        className="example-code"
      >
        {code}
      </SyntaxHighlighter>
      <WinDatePicker
        inputProps={{
          onDateChange: handleDateChange
        }}
      />
    </div>
  )
}
export default Basic