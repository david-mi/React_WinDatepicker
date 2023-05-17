import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { WinDateWrapper } from "../../../lib";
import type { OnDateChangeProps } from "../../../lib";

const code = `
const App = () => {

  function handleDateChange(date) {
    console.log(date)
  }

  return (
    <WinDateWrapper
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
        onDateChange: handleDateChange
      }}
    />
  )
}`;

const CustomColors = () => {
  function handleDateChange(date: OnDateChangeProps) {
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
          onDateChange: handleDateChange
        }}
      />
    </div>
  );
};
export default CustomColors;