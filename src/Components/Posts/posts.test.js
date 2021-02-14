import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Posts from './index.js';
import SC from '../../styles.js';

Enzyme.configure({adapter: new Adapter()});
describe("Posts Component", () => {
  test('Render a post', () => {
    const component = shallow(<Posts title="Lorem Ipsum" body="Lorem Ipsum test body" />);
    expect(component.find(SC.TColumn).at(0).text()).toEqual('Lorem Ipsum');
    expect(component.find(SC.TColumn).at(1).text()).toEqual('Lorem Ipsum test body');
  });

  test('Render a post with body', () => {
    const component = shallow(<Posts body="Lorem Ipsum test body" />);
    expect(component.find(SC.TColumn).at(0).text()).toEqual('');
    expect(component.find(SC.TColumn).at(1).text()).toEqual('Lorem Ipsum test body');
  });

  test('Render a post with title', () => {
    const component = shallow(<Posts title="Lorem Ipsum" />);
    expect(component.find(SC.TColumn).at(0).text()).toEqual('Lorem Ipsum');
    expect(component.find(SC.TColumn).at(1).text()).toEqual('');
  });

  test('Render a post with no parameter', () => {
    const component = shallow(<Posts />);
    expect(component.find(SC.TColumn).at(0).text()).toEqual('');
    expect(component.find(SC.TColumn).at(1).text()).toEqual('');
  });
});