import React from "react";
import {render, screen, cleanup, fireEvent} from '@testing-library/react';
import renderer from 'react-test-renderer';
import Contatos from '../../pages/Contatos';
import "@testing-library/jest-dom/extend-expect"
import { MemoryRouter, Router } from "react-router";

let component;

beforeEach(() => {
  component = render(
    <MemoryRouter>
        <Contatos />
    </MemoryRouter>
  );
})

test("should have name, email, subject and message input",  () => {
  const nameInput = component.getByTestId('name');
  const emailInput = component.getByTestId('email');
  const subjectInput = component.getByTestId('subjec');
  const messageInput = component.getByTestId('message');
  expect(nameInput).toBeInTheDocument();
  expect(emailInput).toBeInTheDocument();
  expect(subjectInput).toBeInTheDocument();
  expect(messageInput).toBeInTheDocument();
})

test("should change inputs when onChange event is fired",  () => {
  const nameInput = component.getByTestId('name');
  fireEvent.change(nameInput, {
    target:{
      value: "NAME"
    }
  })
  expect(nameInput.value).toBe("NAME");

  const emailInput = component.getByTestId('email');
  fireEvent.change(emailInput, {
    target:{
      value: "email@email.email"
    }
  })
  expect(emailInput.value).toBe("email@email.email");

  const subjectInput = component.getByTestId('subject');
  fireEvent.change(subjectInput, {
    target:{
      value: "assunto"
    }
  })
  expect(subjectInput.value).toBe("assunto");

  const messageInput = component.getByTestId('message');
  fireEvent.change(messageInput, {
    target:{
      value: "mensagem"
    }
  })
  expect(messageInput.value).toBe("mensagem");
})



test('matches snapshot', () => {
   const tree = renderer.create( 
       <Contatos />).toJSON();
   expect(tree).toMatchSnapshot();
  
})