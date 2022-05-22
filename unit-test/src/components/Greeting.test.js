import Greeting from "./Greeting";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe('Greeting component', ()=>{
    test('renders Hello World as a text', ()=>{
        //arrange
        render(<Greeting/>);

        //act
        //...nothing

        //assert
        const helloWorldElement = screen.getByText('Hello World', {exact: false})
        expect(helloWorldElement).toBeInTheDocument()
    })

    test('renders good to see you if button is NOT clicked', ()=>{
        render(<Greeting/>)
        const outputElement = screen.getByText('good to see you', {exact: false})
        expect(outputElement).toBeInTheDocument()
    })

    test('renders changed if button is clicked', ()=>{
        //arrange
        render(<Greeting/>)

        //act
        const buttonElement = screen.getByRole('button')
        userEvent.click(buttonElement)

        //assert
        const outputElement = screen.getByText('Changed!')
        expect(outputElement).toBeInTheDocument()
    })

    test('does not render good to see you if button is clicked', ()=>{
        render(<Greeting/>)

        const buttonElement = screen.getByRole('button')
        userEvent.click(buttonElement)

        const outputElement = screen.queryByText('good to see you', {exact: false})
        expect(outputElement).toBeNull()
    })
})

//getByText return
//queryByText return
//findByText return promise
