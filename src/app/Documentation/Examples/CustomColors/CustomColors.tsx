import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { WinDatePicker } from "../../../../lib";
import type { OnDateChange } from "../../../../lib";

const code = `
const App = () => {

  function handleDateChange(date) {
    console.log(date)
  }

  return (
    <WinDatePicker
      inputProps={{
        onDateChange: handleDateChange
      }}
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
        disabledButtonsBackground: "blue",
        clickedButton: "#41869b"
      }}
    />
  )
}`;

const CustomColors = () => {
  function handleDateChange(date: OnDateChange) {
    console.log(date);
  }

  return (
    <div id="colors" className="example">
      <h2 className="example-title">Colors</h2>
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
          disabledButtonsBackground: "blue",
          clickedButton: "#41869b"
        }}
      />
    </div>
  );
};
export default CustomColors;