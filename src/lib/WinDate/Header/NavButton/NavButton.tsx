import NavButtonIcon from "./NavButtonIcon/NavButtonIcon"

export interface Props {
  handler: () => void
  direction: "up" | "down"
}

const NavButton = ({ handler, direction }: Props) => {
  return (
    <button data-testid="nav-button" onClick={handler}>
      <NavButtonIcon direction={direction} />
    </button>
  )
}
export default NavButton