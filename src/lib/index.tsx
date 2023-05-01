import Windate from "./WinDate/Windate";
import GlobalProvider from "./Context/Global";

export const WinDateWrapper = () => {
  return (
    <GlobalProvider>
      <Windate />
    </GlobalProvider>
  )
}