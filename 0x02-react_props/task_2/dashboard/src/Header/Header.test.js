import React from "react";
import Header from "./Header";
import { shallow } from 'enzyme';

describe('Header tests', () => {
	it('renders without crashing', () => {
		const component = shallow(<Header />);

		expect(component).toBeDefined();
	});
  it('renders h1 tags', () => {
    const component = shallow(<Header/>);

    expect(component).find('h1').toBeDefined();
  });
  it('renders img tags', () => {
    const component = shallow(<Header/>);

    expect(component).find('img').toBeDefined();
  });
});