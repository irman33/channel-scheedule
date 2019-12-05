import Enzyme, { shallow } from "enzyme";
import Day from "../src/components/Day";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

test("App component", () => {
  const wrapper = shallow(<Day />);

  expect(wrapper).toMatchSnapshot();
});
