import { expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Infos from "../../lib/WinDate/Header/Infos/Infos";

describe("<Infos>", () => {
  it("Shoud retrieve 'avril 2023' in the document", () => {
    const infos = "avril 2023"

    render(<Infos infos={infos} />)
    expect(screen.getByText("avril 2023")).toBeInTheDocument()
  })
})
