import NavButtonIcon from "./NavButtonIcon/NavButtonIcon"

export interface Props {
  handler: () => void
  direction: "up" | "down"
  disabled: boolean
}

const NavButton = ({ handler, direction, disabled }: Props) => {
  return (
    <button
      disabled={disabled}
      onClick={handler}
      data-testid="nav-button"
    >
      <NavButtonIcon direction={direction} />
    </button>
  )
}
export default NavButton