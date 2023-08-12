import { shallow } from 'enzyme';
import App from './App.js'

describe("App tests", () => {
  it('it renders without crashing', () => {
    const wrapper = shallow(<App/>)
    expect(wrapper).toBeDefined();
  })
  it('should render a div with class App-header', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('.App-header')).toBeDefined()
  })
  it('should render a div with class App-Body', () => { 
    expect(shallow(<App />).find('.App-Body')).toBeDefined()
  })
  it('should render a div with class App-footer', () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find('.App-footer')).toBeDefined()
  })
})