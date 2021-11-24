import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'
import Cadastro from '../pages/Cadastro'
import Header from '../components/Header/Header'
import { MemoryRouter } from 'react-router'

describe("Cadastro Component", () => {
    test("should verify if the component had changes", () => {
        const component = render(<Cadastro/>)

        expect(component).toMatchSnapshot();
    })

    test("should have inputs in the form", () => {
        render(<Cadastro/>)
        
        const nameInput = screen.getByPlaceholderText('Maria da Penha')
        const emailInput = screen.getByPlaceholderText('maria@email.com')
        const phoneInput = screen.getByPlaceholderText('(DDD) 99999-0000')
        const birthInput = screen.getByPlaceholderText('01/01/1990')
        const usernameInput = screen.getByPlaceholderText('MariaPenha123')
        const passwordInput = screen.getByPlaceholderText('************')
        expect(nameInput).toBeInTheDocument()
        expect(emailInput).toBeInTheDocument()
        expect(phoneInput).toBeInTheDocument()
        expect(birthInput).toBeInTheDocument()
        expect(usernameInput).toBeInTheDocument()
        expect(passwordInput).toBeInTheDocument()
    })

    test("should hava submit button", () => {
        render(<Cadastro/>)

        const submitButton = screen.getByRole("button")
        expect(submitButton).toBeInTheDocument();
    })

    test("should change the value of input", () => {
        render(<Cadastro/>)

        const nameInput = screen.getByPlaceholderText("Maria da Penha");
        fireEvent.change(nameInput, {
            target: {
                value: "lucas"
            }
        })
        expect(nameInput.value).toBe("lucas")
    })
})