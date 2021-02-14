import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Users from './index.js';
import SC from '../../styles.js';

Enzyme.configure({adapter: new Adapter()});

const sample = {
  "id": 1,
  "name": "Leanne Graham",
  "email": "Sincere@april.biz",
  "city": "Gwenborough",
  "company": "Romaguera-Crona",
}
test('Render a post', () => {
  const component = shallow(
    <Users
      {...sample}
    />
  );
  expect(component.find(SC.TColumn).at(0).text()).toEqual('Leanne Graham');
  expect(component.find(SC.TColumn).at(1).find('a').text()).toEqual('Sincere@april.biz');
});