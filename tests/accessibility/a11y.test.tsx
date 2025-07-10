import { render, act, screen } from "@testing-library/react"
import { axe, toHaveNoViolations } from "jest-axe"
import userEvent from "@testing-library/user-event"
import { DataDownload } from "@/components/data-download"
import * as React from "react"

expect.extend(toHaveNoViolations)

describe("DataDownload accessibility", () => {
  it("should have no accessibility violations by default", async () => {
    const { container } = render(<DataDownload />)
    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it("should have no accessibility violations with dropdown open", async () => {
    const user = userEvent.setup()
    const { container } = render(<DataDownload />)

    await act(async () => {
      await user.click(screen.getByRole("button", { name: /download data/i }))
    })

    const results = await axe(container)
    expect(results).toHaveNoViolations()
  })

  it("should be keyboard navigable", async () => {
    const user = userEvent.setup()
    render(<DataDownload />)

    await act(() => user.tab()) // focus on download button
    expect(screen.getByRole("button", { name: /download data/i })).toHaveFocus()

    await act(() => user.keyboard("[Enter]"))

    expect(screen.getByText(/download json data/i)).toBeVisible()

    await act(() => user.keyboard("[Tab]"))
    expect(screen.getByText(/print\/save as pdf/i)).toHaveFocus()
  })
})
