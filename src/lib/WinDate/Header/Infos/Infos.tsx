import styles from "./infos.module.css"

interface Props {
  infos: string
}

const Infos = ({ infos }: Props) => {
  return (
    <div className={styles.infos}>
      {infos}
    </div>
  )
}
export default Infos