
import type { Props } from "../NavButton"
import styles from "./navButtonIcon.module.css"

const NavButtonIcon = ({ direction }: Pick<Props, "direction">) => {
  const className = `${styles.icon} ${styles[direction]}`

  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
      <path fill="#888888" d="M16 22L6 12L16 2l1.775 1.775L9.55 12l8.225 8.225L16 22Z"></path>
    </svg>
  )
}

export default NavButtonIcon