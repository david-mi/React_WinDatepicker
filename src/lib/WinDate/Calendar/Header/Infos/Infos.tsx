import { useContext } from "react"
import { GlobalContext } from "../../../../Context/Global"
import styles from "./infos.module.css"

interface Props {
  infos: string
}

const Infos = ({ infos }: Props) => {
  const { setTimeline } = useContext(GlobalContext)

  function handleClick() {
    setTimeline("YEAR")
  }

  return (
    <button onClick={handleClick} className={styles.infos}>
      {infos}
    </button>
  )
}
export default Infos