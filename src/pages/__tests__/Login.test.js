import React from "react";
import {render, screen, cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';
import Login from '../../pages/Login';
import { Context } from  '../../Context/AuthContext'
import "@testing-library/jest-dom/extend-expect"

let getByTestId;

beforeEach(() => {
  const component = render(<Login />);
  getByTestId = component.getByTestId;
})

test('should fail on incorrect user', () => {
  const submitEl = getByTestId("submit");
  expect(submitEl).toBe("Login");
});


// test('matches snapshot', () => {
//   const tree = renderer.create(<Context value="Provided Value"> 
//       <Login />
//     </Context>).toJSON();
//   expect(tree).toMatchSnapshot();
  
// });