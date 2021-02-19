import React from 'react';
import * as ReactDOM from 'react-dom';
import { DefaultEditor } from '../dist';

describe('Thing', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DefaultEditor />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
