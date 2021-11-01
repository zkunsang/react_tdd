import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Header from '../HeaderComponent';

import reducers from '../../Reducers';

const store = createStore(reducers);

test("dev, live button exists", () => {
  render(<Provider store={store}><Header /></Provider>);

  const buttonElements = screen.getAllByRole("button");

  const buttons = buttonElements.map((item) => item.textContent);

  expect(buttons).toEqual(["dev", "live"]);
})

test("on load reducer-store current server status dev", () => {
  render(<Provider store={store}><Header /></Provider>);

  const devButtonElements = screen.getByRole("button", { name: "dev" });

  userEvent.click(devButtonElements);

  const labelElements = screen.getByText("dev server");

  expect(labelElements).toBeInTheDocument();
})

test("on load reducer-store current server status live", () => {
  render(<Provider store={store}><Header /></Provider>);

  const devButtonElements = screen.getByRole("button", { name: "live" });

  userEvent.click(devButtonElements);

  const labelElements = screen.getByText("live server");

  expect(labelElements).toBeInTheDocument();
})