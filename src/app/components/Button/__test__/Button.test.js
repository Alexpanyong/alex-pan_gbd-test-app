import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Button from '../Button';

afterEach(cleanup);

test("renders successfully", () => {
  render(<Button />);
});

test("renders correctly", () => {
  const { getByTestId } = render(<Button text="This is a button" />);
  expect(getByTestId("button")).toHaveTextContent("This is a button");
});
