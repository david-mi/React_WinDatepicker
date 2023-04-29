import styles from "./date.module.css"

interface Props {
  date: number
}

const Date = ({ date }: Props) => {
  return (
    <button className={styles.date}>
      {date}
    </button>
  )
}
export default Date