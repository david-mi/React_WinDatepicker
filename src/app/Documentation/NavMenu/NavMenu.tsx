import styles from "./navMenu.module.css"

const NavMenu = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li><a href="#basic">Basic</a></li>
        <li><a href="#colors">Colors</a></li>
        <li><a href="#range">Range</a></li>
      </ul>
    </nav>
  )
}
export default NavMenu