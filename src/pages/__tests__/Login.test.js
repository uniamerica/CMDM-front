import React from "react";
import {render, screen, cleanup, fireEvent} from '@testing-library/react';
import renderer from 'react-test-renderer';
import Login from '../../pages/Login';
import { Context } from  '../../Context/AuthContext'
import "@testing-library/jest-dom/extend-expect"
import { MemoryRouter, Router } from "react-router";

let component;

beforeEach(() => {
  component = render(
    <MemoryRouter>
      <Context.Provider value="sim">
        <Login />
      </Context.Provider>
    </MemoryRouter>
  );
})

test("should have username input and password input",  () => {
  const usernameInput = component.getByTestId('usernameInput');
  const passwordInput = component.getByTestId('passwordInput');
  expect(usernameInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
})

test("should change inputs when onChange event is fired",  () => {
  const usernameInput = component.getByTestId('usernameInput');
  fireEvent.change(usernameInput, {
    target:{
      value: "jorge"
    }
  })
  expect(usernameInput.value).toBe("jorge");

  const passwordInput = component.getByTestId('passwordInput');
  fireEvent.change(passwordInput, {
    target:{
      value: "teste123"
    }
  })
  expect(passwordInput.value).toBe("teste123");
})


// test('matches snapshot', () => {
//   const tree = renderer.create(<Context value="Provided Value"> 
//       <Login />
//     </Context>).toJSON();
//   expect(tree).toMatchSnapshot();
  
// });