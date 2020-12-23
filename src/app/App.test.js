import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme, { shallow } from 'enzyme';
import { Provider } from 'react-redux';
import { store } from './store/store';
import App from './App';

Enzyme.configure({ adapter: new Adapter() });

it("Test for rendering <App /> successfully", () => {
  shallow(<Provider store={store}><App /></Provider>);
});
