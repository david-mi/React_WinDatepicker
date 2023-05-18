import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { WinDateWrapper } from "../../../../lib";
import type { OnDateChangeProps } from "../../../../lib";

const code = `
const App = () => {

  const today = new Date();
  const todayDate = today.getDate();

  function handleDateChange(date: OnDateChangeProps) {
    console.log(date);
  }

  function getDatesIntervals(
    daysBeforeToday: number,
    daysAfterToday: number
  ) {
    const startDate = new Date(today);
    startDate.setDate(todayDate - daysBeforeToday);
    const formattedStartDate = startDate.toISOString().split("T")[0]

    const endDate = new Date(today);
    endDate.setDate(todayDate + daysAfterToday);
    const formattedEndDate = endDate.toISOString().split("T")[0]

    return [formattedStartDate, formattedEndDate];
  }

  const [startDate, endDate] = getDatesIntervals(5, 25);

  return (
    <WinDateWrapper
      calendarColors={{
        disabledButtons: "rgb(121, 121, 121)",
        disabledButtonsBackground: "rgba(107, 107, 107, 0.33)"
      }}
      inputProps={{
        onDateChange: handleDateChange,
        setTodayByDefault: true,
        min: startDate,
        max: endDate
      }}
    />
  )
}`;

const Range = () => {
  const today = new Date();
  const todayDate = today.getDate();

  function handleDateChange(date: OnDateChangeProps) {
    console.log(date);
  }

  function getDatesIntervals(
    daysBeforeToday: number,
    daysAfterToday: number
  ) {
    const startDate = new Date(today);
    startDate.setDate(todayDate - daysBeforeToday);
    const formattedStartDate = startDate.toISOString().split("T")[0]

    const endDate = new Date(today);
    endDate.setDate(todayDate + daysAfterToday);
    const formattedEndDate = endDate.toISOString().split("T")[0]

    return [formattedStartDate, formattedEndDate];
  }

  const [startDate, endDate] = getDatesIntervals(5, 25);


  return (
    <div id="range" className="example">
      <h2 className="example-title">Range</h2>
      <SyntaxHighlighter
        language="javascript"
        style={atomOneDark}
        className="example-code"
      >
        {code}
      </SyntaxHighlighter>
      <WinDateWrapper
        calendarColors={{
          disabledButtons: "rgb(121, 121, 121)",
          disabledButtonsBackground: "rgba(107, 107, 107, 0.33)"
        }}
        inputProps={{
          onDateChange: handleDateChange,
          setTodayByDefault: true,
          min: startDate,
          max: endDate
        }}
      />
    </div>
  );
};

export default Range;