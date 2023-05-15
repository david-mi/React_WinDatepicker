import Infos from "./Infos/Infos"
import NavButton from "./NavButton/NavButton"
import styles from "./header.module.css"

interface Props {
  handlePrevious: () => void
  handleNext: () => void
  infos: string
  shouldDisablePrevious: boolean
  shouldDisableNext: boolean
}

const Header = (props: Props) => {
  const { handlePrevious, handleNext, infos, shouldDisablePrevious, shouldDisableNext } = props

  return (
    <header className={styles.header}>
      <Infos infos={infos} />
      <NavButton
        handler={handlePrevious}
        disabled={shouldDisablePrevious}
        direction="up"
      />
      <NavButton
        handler={handleNext}
        direction="down"
        disabled={shouldDisableNext}
      />
    </header>
  )
}

export default Header