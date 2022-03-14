import { render,screen } from "@testing-library/react"
import UserEvent from "@testing-library/user-event"
import App from "./App"
test("increment action",()=>{
    render(<App></App>)
    const counter=screen.getByTestId("counter")
    expect(counter.textContent).toBe("0")
    const incrementbutton=screen.getByText("+")
    UserEvent.click(incrementbutton)
    UserEvent.click(incrementbutton)
    expect(counter.textContent).toBe("2")
})
test("decrement action",()=>{
    render(<App></App>)
    const counter=screen.getByTestId("counter")
    const decrementbutton=screen.getByText("-")
    UserEvent.click(decrementbutton)
    UserEvent.click(decrementbutton)
    expect(counter.textContent).toBe("-2")
})
test("combine incr and decr",()=>{
    render(<App></App>)
    const counter=screen.getByTestId("counter")
    const incrementbutton=screen.getByText("+")
    const decrementbutton=screen.getByText("-")
    UserEvent.click(incrementbutton)
    UserEvent.click(incrementbutton)
    UserEvent.click(decrementbutton)
    UserEvent.click(decrementbutton)
    UserEvent.click(decrementbutton)
    expect(counter.textContent).toBe("-1")

})