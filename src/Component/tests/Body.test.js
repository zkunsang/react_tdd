import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux'
import BodyComponent from '../BodyComponent';
import { createStore } from 'redux';

import reducers from '../../Reducers';

const store = createStore(reducers);

test("dev load dev saleInfo data", () => {
  render(<Provider store={store}><BodyComponent /></Provider>)
  // expect()
})