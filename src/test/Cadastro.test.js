import React from "react"
import { render, screen } from '@testing-library/react'
import { shallow, mount } from 'enzyme'
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import Cadastro from '../pages/Cadastro'

describe("Cadastro Component", () => {
    test("Should have submit button", () => {
        render(<Cadastro />)

        const submitButton = screen.getByRole("button")

        expect(submitButton).toBeInTheDocument();
    })
    
    test("should call method handleSubmit when click on the submit button", () => {
        render(<Cadastro />)
        const spy = jest.spyOn(Cadastro.prototype, "handleSubmit")

        const submitButton = screen.getByRole("button")
        userEvent.click(submitButton)

        expect(spy).toHaveBeenCalled()

        spy.mockRestore()
    })
})