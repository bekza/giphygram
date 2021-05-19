import App from "./App";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("App", () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<App />);
  });

  it("should render App", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("should render App props", () => {
    expect(wrapper.prop("className")).toEqual("App");
  });
});
