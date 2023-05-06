import { useContext } from "react"
import { GlobalContext } from "../../../../Context/Global"
import styles from "./infos.module.css"
import { handleTimeout } from "../../../utils"

interface Props {
  infos: string
}

const Infos = ({ infos }: Props) => {
  const { setTimeline, timeline } = useContext(GlobalContext)

  function preTimeoutCallback() {
    document.body.classList.add("switch")
  }

  function timeoutCallback() {
    const nextTimeline = timeline === "YEAR"
      ? "MONTH"
      : "YEAR"
    setTimeline(nextTimeline)
    document.body.classList.remove("switch")
  }

  return (
    <button
      onClick={handleTimeout({ timeoutCallback, preTimeoutCallback, delay: 200 })}
      className={styles.infos}
    >
      {infos}
    </button>
  )
}
export default Infos