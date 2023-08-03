const Enzyme = require('enzyme');
const Adapter = require('@cfaester/enzyme-adapter-react-18');

Enzyme.configure({ adapter: new Adapter() });