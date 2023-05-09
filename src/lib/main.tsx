import Windate from "./WinDate/Windate";
import GlobalProvider from "./Context/Global";
import "./styles/global.css"

export const WinDateWrapper = () => {
  return (
    <GlobalProvider>
      <Windate />
    </GlobalProvider>
  )
}