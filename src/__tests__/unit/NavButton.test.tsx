import { expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import NavButton, { Props as NavButtonProps } from "../../lib/WinDate/Calendar/Header/NavButton/NavButton";

describe("<NavButton>", () => {
  let navButtonProps: NavButtonProps

  beforeAll(() => {
    navButtonProps = {
      handler: vi.fn(),
      direction: "up",
      disabled: false
    }
  })

  it("Should call handler props on button click", () => {
    render(<NavButton {...navButtonProps} />)

    const navButton = screen.getByTestId("nav-button")
    fireEvent.click(navButton)

    expect(navButtonProps.handler).toBeCalled()
  })
})