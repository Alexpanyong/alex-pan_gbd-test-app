/* eslint-disable jest/valid-expect */
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { render } from 'enzyme';
import { expect } from 'chai';
import Button from '../Button';

Enzyme.configure({ adapter: new Adapter() });

it("Test for rendering successfully", () => {
  render(<Button />);
});

it("Test for rendering correctly", () => {
  const buttonComponent = render(<Button text="This is a button" />);
  expect(buttonComponent[0].childNodes[0].data).to.equal("This is a button");
});