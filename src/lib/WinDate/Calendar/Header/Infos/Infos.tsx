import { useContext, useRef } from "react"
import { GlobalContext } from "../../../../Context/Global"
import styles from "./infos.module.css"

interface Props {
  infos: string
}

const Infos = ({ infos }: Props) => {
  const { setTimeline } = useContext(GlobalContext)
  let timeoutId = useRef<NodeJS.Timeout | null>(null)

  function delayAction(callback: () => void) {
    if (timeoutId.current !== null) return

    document.body.classList.add("switch")

    timeoutId.current = setTimeout(() => {
      callback()
      timeoutId.current = null
      document.body.classList.remove("switch")
    }, 200)
  }

  function handleClick() {
    setTimeline("YEAR")
  }

  return (
    <button onClick={() => delayAction(handleClick)} className={styles.infos}>
      {infos}
    </button>
  )
}
export default Infos