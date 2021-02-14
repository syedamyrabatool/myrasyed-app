import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

test('renders learn react link', () => {
  const component = renderer.create(<App />);
  const linkElement = component.toJSON()
  expect(linkElement).toMatchSnapshot();
});
