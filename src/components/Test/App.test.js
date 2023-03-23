import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { render, screen } from "@testing-library/react";
import App from "../../App.js";

describe( 'TEST APP', () => {
 test('Menu links work', async () => {
  render(<App />);
  const user = userEvent.setup()
  const loginLink =  screen.getByText(/login/i);
  await user.click(loginLink);
  expect(screen.getByText(/This is login page/i)).toBeInTheDocument();
})})
