import Infos from "./Infos/Infos"
import NavButton from "./NavButton/NavButton"
import styles from "./header.module.css"

interface Props {
  handlePrevious: () => void
  handleNext: () => void
  infos: string
}

const Header = ({ handlePrevious, handleNext, infos }: Props) => {
  return (
    <header className={styles.header}>
      <Infos infos={infos} />
      <NavButton handler={handlePrevious} direction="up" />
      <NavButton handler={handleNext} direction="down" />
    </header>
  )
}

export default Header