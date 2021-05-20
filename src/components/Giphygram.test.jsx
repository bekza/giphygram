import { Giphygram } from "./Giphygram";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

describe("Giphygram", () => {
  let wrapper;
  const mockProps = ["img1", "img2", "img3", "img4", "img5"];

  beforeEach(() => {
    wrapper = shallow(<Giphygram state={mockProps} setState={jest.fn()} />);
  });

  it("should render Giphygram", () => {
    expect(wrapper.exists()).toBe(true);
  });
  it("should render Header", () => {
    expect(wrapper.find("Header").exists()).toBe(true);
    expect(wrapper.find("Header").prop("inputValue")).toEqual("");
  });
  it("should render List", () => {
    expect(wrapper.find("List").exists()).toBe(true);
    expect(wrapper.find("List").prop("loading")).toBe(false);
    expect(wrapper.find("List").prop("checked")).toBe(false);
  });
});
