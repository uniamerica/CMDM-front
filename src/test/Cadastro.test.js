import React from "react"
import { shallow, } from 'enzyme'
import '@testing-library/jest-dom/extend-expect'
import '@testing-library/jest-dom'
import Cadastro from '../pages/Cadastro'

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() });

describe("Testing Cadastro Component", () => {
    it("should render correctly", () => {
        const wrapper = shallow(
            <Cadastro />
        )

        expect(wrapper).toMatchSnapshot();
    })
    
})