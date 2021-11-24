import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'
import Home from '../Home'
import { MemoryRouter } from 'react-router'

describe("Home Component", () => {
    test("should verify if the component had changes", () => {
        const component = render(
            <MemoryRouter>
                <Home/>
            </MemoryRouter>
        )

        expect(component).toMatchSnapshot()
    })
})