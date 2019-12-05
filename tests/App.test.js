import Enzyme, { shallow } from "enzyme";
import App from "../src/components/App";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

test("App component", () => {
  const wrapper = shallow(<App />);

  expect(wrapper).toMatchSnapshot();
});
