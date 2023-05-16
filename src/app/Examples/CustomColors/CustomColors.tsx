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
        calendarColors={{
          background: "black",
          headerButtonsText: "white",
          headerButtonsTextHover: "#68dcff",
          weekDaysText: "white",
          chosenButtonText: "#68dcff",
          chosenBorder: "white",
          currentButtonBackground: "#222729",
          currentButtonBorder: "#68dcff",
          currentButtonSecondBorder: "black",
          notCurrentButtonText: "#264b57",
          buttonBorderHover: "#68dcff",
          disabled: "blue",
          disabledBackground: "blue"
        }}
        inputProps={{
          onDateChange: handleDateChange
        }}
      />
  )
}`;

const CustomColors = () => {
  function handleDateChange(date) {
    console.log(date);
  }

  return (
    <div className="example">
      <h2 className="example-title">Custom Colors</h2>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        className="example-code"
      >
        {code}
      </SyntaxHighlighter>
      <WinDateWrapper
        calendarColors={{
          background: "black",
          headerButtonsText: "white",
          headerButtonsTextHover: "#68dcff",
          weekDaysText: "white",
          chosenButtonText: "#68dcff",
          chosenBorder: "white",
          currentButtonBackground: "#222729",
          currentButtonBorder: "#68dcff",
          currentButtonSecondBorder: "black",
          notCurrentButtonText: "#264b57",
          buttonBorderHover: "#68dcff",
          disabled: "blue",
          disabledBackground: "blue"
        }}
        inputProps={{
          onDateChange: handleDateChange
        }}
      />
    </div>
  );
};
export default CustomColors;