import React from 'react';
import renderer from 'react-test-renderer';
import Pad from '../components/Pad';

test('renders correctly', () => {
  const tree = renderer.create(<Pad />).toJSON();
  expect(tree).toMatchSnapshot();
});
