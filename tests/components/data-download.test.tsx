import { render, screen, act } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { DataDownload } from "@/components/data-download"

describe("DataDownload", () => {
  beforeAll(() => {
    global.URL.createObjectURL = jest.fn(() => "blob:url")
    global.URL.revokeObjectURL = jest.fn()
    window.open = jest.fn()
  })

  it("renders the download button", () => {
    render(<DataDownload />)
    expect(screen.getByRole("button", { name: /download data/i })).toBeInTheDocument()
  })

  it("opens the dropdown with all actions", async () => {
    const user = userEvent.setup()
    render(<DataDownload />)

    await act(async () => { await user.click(screen.getByRole("button", { name: /download data/i })) })

    expect(screen.getByText(/print\/save as pdf/i)).toBeInTheDocument()
    expect(screen.getByText(/download json data/i)).toBeInTheDocument()
    expect(screen.getByText(/view online data/i)).toBeInTheDocument()
  })

  it("downloads JSON when clicked", async () => {
    const user = userEvent.setup()
    render(<DataDownload />)

    await act(async () => { await user.click(screen.getByRole("button", { name: /download data/i })) })
    const jsonButton = screen.getByText(/download json data/i)

    const appendSpy = jest.spyOn(document.body, "appendChild")
    const removeSpy = jest.spyOn(document.body, "removeChild")

    await act(() => user.click(jsonButton))

    expect(global.URL.createObjectURL).toHaveBeenCalled()
    expect(appendSpy).toHaveBeenCalled()
    expect(removeSpy).toHaveBeenCalled()
  })

  it("opens print window when print is clicked", async () => {
    const user = userEvent.setup()
    render(<DataDownload />)

    await act(async () => { await user.click(screen.getByRole("button", { name: /download data/i })) })
    const printBtn = screen.getByText(/print\/save as pdf/i)

    await act(() => user.click(printBtn))

    expect(window.open).toHaveBeenCalled()
  })

  it("navigates to view-online page when view option is clicked", async () => {
    const user = userEvent.setup()
    render(<DataDownload />)

    await act(async () => { await user.click(screen.getByRole("button", { name: /download data/i })) })
    const viewBtn = screen.getByText(/view online data/i)

    await act(() => user.click(viewBtn))

    expect(window.open).toHaveBeenCalledWith("/view-online", "_blank")
  })
})
