import { useContext } from "react"
import { GlobalContext } from "../../../../Context/Global"
import styles from "./infos.module.css"
import { handleTimeout } from "../../../utils"

interface Props {
  infos: string
}

const Infos = ({ infos }: Props) => {
  const { setTimeline, timeline, setIsSwitchingTimeline } = useContext(GlobalContext)

  function preTimeoutCallback() {
    setIsSwitchingTimeline(true)
  }

  function timeoutCallback() {
    const nextTimeline = timeline === "YEAR"
      ? "MONTH"
      : "YEAR"
    setTimeline(nextTimeline)
    setIsSwitchingTimeline(false)
  }

  return (
    <button
      onClick={handleTimeout({ timeoutCallback, preTimeoutCallback, delay: 200 })}
      type="button"
      className={styles.infos}
    >
      {infos}
    </button>
  )
}
export default Infos