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
  it("should render list", () => {
    expect(wrapper.find(".list").children()).toHaveLength(5);
  });
});
