import { List } from "./List";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Loader } from "semantic-ui-react";

configure({ adapter: new Adapter() });

describe("List", () => {
  let wrapper;
  const mockProps = {
    state: ["img1", "img2", "img3", "img4", "img5"],
    loading: true,
    checked: false,
  };

  beforeEach(() => {
    wrapper = shallow(<List {...mockProps} />);
  });

  it("should render List", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("should render list", () => {
    expect(wrapper.children()).toHaveLength(6);
  });
  it("should render Loader", () => {
    expect(wrapper.find(Loader).exists()).toBe(true);
    expect(wrapper.find(Loader).prop("size")).toEqual("big");
    expect(wrapper.find(Loader).prop("active")).toEqual(true);
    expect(wrapper.find(Loader).prop("inline")).toEqual("centered");
  });
});
