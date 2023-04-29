import styles from "./infos.module.css"

interface Props {
  children: JSX.Element[]
}

const Infos = ({ children }: Props) => {
  return (
    <div className={styles.infos}>
      {children}
    </div>
  )
}
export default Infos