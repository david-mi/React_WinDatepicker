import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { WinDateWrapper } from "../../../lib";

const code = `
const App = () => {

  const today = new Date()
  const todayDate = today.getDate()

  function handleDateChange(date) {
    console.log(date)
  }

  function getDatesIntervals(daysBeforeToday, daysAfterToday) {
    const startDate = new Date(today)
    startDate.setDate(todayDate - daysBeforeToday)

    const endDate = new Date(today)
    endDate.setDate(todayDate + daysAfterToday)

    return [startDate.toISOString(), endDate.toISOString()]
  }

  const [startDate, endDate] = getDatesIntervals(5, 25)

  return (
    <WinDateWrapper
      calendarColors={{
        disabled: "rgb(121, 121, 121)",
        disabledBackground: "rgba(107, 107, 107, 0.33)"
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

  function handleDateChange(date) {
    console.log(date);
  }

  function getDatesIntervals(daysBeforeToday, daysAfterToday) {
    const startDate = new Date(today);
    startDate.setDate(todayDate - daysBeforeToday);

    const endDate = new Date(today);
    endDate.setDate(todayDate + daysAfterToday);

    return [startDate.toISOString(), endDate.toISOString()];
  }

  const [startDate, endDate] = getDatesIntervals(5, 25);


  return (
    <div className="example">
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
          disabled: "rgb(121, 121, 121)",
          disabledBackground: "rgba(107, 107, 107, 0.33)"
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