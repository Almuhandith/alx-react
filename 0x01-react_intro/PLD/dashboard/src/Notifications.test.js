import {shallow} from 'enzyme';
import Notifications from './Notifications';

describe('Notification tests', () => {
  it('it renders without crashing', () => {
    const wrapper = shallow(<Notifications/>)
    expect(wrapper).toBeDefined()
  })
  it('renders a list', () => {
    const wrapper = shallow(<Notifications />)
    expect(wrapper.find('ul')).toBeDefined()
  })
  it('renders three list items', () => {
    const wrapper = shallow(<Notifications/>)
    expect(wrapper.find('li')).toHaveLength(3);
  })
  it('render correct text', () => {
    const wrapper = shallow(<Notifications/>)
    expect(wrapper.find('p').prop('children')).toBe('Here is the list of notifications')
  })
})