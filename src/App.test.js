import Model from './model/Model.js'
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
import chooseConfig from './controller/ChooseConfigController.js';
import processClick from './controller/Controller.js';
import reset from './controller/ResetController.js';
import rotate from './controller/RotateController.js';
import userEvent from '@testing-library/user-event'

// default puzzle to use
import { config_4x4, config_5x5, config_6x6 } from "./configs"

import { isClickInsideCircle } from './controller/Controller.js';


test('no moves when model created', () => {
  var model = new Model()
  model.setcurrentConfig(4)
  expect(model.moveCount).toBe(0)
});

test('validate resetting sets move count to 0', () => {
  const { getByText } = render(<App />);
  const canvasElement = screen.getByTestId('canvas');
  fireEvent.click(canvasElement, { clientX: 60, clientY: 60})
  const button = screen.getByTestId('clockwise_button')
 fireEvent.click(button);
 const move1Element = getByText(/Moves: 1/i);
 const resetbutton = screen.getByTestId('reset_button')
 fireEvent.click(resetbutton);
 const move2Element = getByText(/Moves: 0/i);
 });

test('move count increases if a group is selected (clockwise)', () => {
const { getByText } = render(<App />);
 const canvasElement = screen.getByTestId('canvas');
 fireEvent.click(canvasElement, { clientX: 60, clientY: 60})
 const button = screen.getByTestId('clockwise_button')
fireEvent.click(button);
const move4Element = getByText(/Moves: 1/i);
});

test('move count increases if a group is selected (counter clockwise)', () => {
const { getByText } = render(<App />);
  const canvasElement = screen.getByTestId('canvas');
  fireEvent.click(canvasElement, { clientX: 60, clientY: 60})
  const button = screen.getByTestId('counter_clockwise_button')
fireEvent.click(button);
const move4Element = getByText(/Moves: 1/i);
});

test('choose config chooses right configuration', () => {
  const { getByText } = render(<App />);
  const canvasElement = screen.getByTestId('canvas');
  const button = screen.getByTestId('counter_clockwise_button')

  const button4 = screen.getByTestId('fourconfig')
  fireEvent.click(button4);
  fireEvent.click(canvasElement, { clientX: 180, clientY: 180})
  fireEvent.click(button);
  const move4Element = getByText(/Moves: 1/i);

  fireEvent.click(button4);
  fireEvent.click(canvasElement, { clientX: 240, clientY: 240})
  fireEvent.click(button);
  const move41Element = getByText(/Moves: 0/i);

  const button5 = screen.getByTestId('fiveconfig')
  fireEvent.click(button5);
  fireEvent.click(canvasElement, { clientX: 240, clientY: 240})
  fireEvent.click(button);
  const move5Element = getByText(/Moves: 1/i);

  fireEvent.click(button5);
  fireEvent.click(canvasElement, { clientX: 300, clientY: 300})
  fireEvent.click(button);
  const move51Element = getByText(/Moves: 0/i);

  const button6 = screen.getByTestId('sixconfig')
  fireEvent.click(button6);
  fireEvent.click(canvasElement, { clientX: 300, clientY: 300})
  fireEvent.click(button);
  const move6Element = getByText(/Moves: 1/i);

  fireEvent.click(button6);
  fireEvent.click(canvasElement, { clientX: 360, clientY: 360})
  fireEvent.click(button);
  const move61Element = getByText(/Moves: 0/i);
  });