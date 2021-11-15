import React from "react";
import {render, screen, cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';
import Login from '../../pages/Login';
import { Context } from  '../../Context/AuthContext'
import "@testing-library/jest-dom/extend-expect"
import { MemoryRouter, Router } from "react-router";

let getByTestId;

beforeEach(() => {
  const component = render(
    <MemoryRouter>
      <Context.Provider value="sim">
        <Login />
      </Context.Provider>
    </MemoryRouter>
  );
  getByTestId = component.getByTestId;
})

// test('should fail on incorrect user', () => {
//   const submitEl = getByTestId("submit");
//   expect(submitEl).toBe("Login");
// });

test("renders contacts", async () => {
  // render(
  //   <MemoryRouter>
  //     <Context.Provider value="sim">
  //       <Login />
  //     </Context.Provider>
  //   </MemoryRouter>
  // )
  const element = getByTestId('jorge');
  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent('jorge');
})


// test('matches snapshot', () => {
//   const tree = renderer.create(<Context value="Provided Value"> 
//       <Login />
//     </Context>).toJSON();
//   expect(tree).toMatchSnapshot();
  
// });