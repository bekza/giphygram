import { Giphygram } from "./Giphygram";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Button, Checkbox } from "semantic-ui-react";

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
  it("should render Giphygram header", () => {
    expect(wrapper.find("h1").at(0).text()).toEqual("GIPHYGRAM");
  });

  describe("Form", () => {
    it("should render Form", () => {
      expect(wrapper.find(".search-form").exists()).toBe(true);
    });
    it("should render Input", () => {
      expect(wrapper.find(".search-input").exists()).toBe(true);
      expect(wrapper.find(".search-input").prop("placeholder")).toEqual(
        "Search..."
      );
      expect(wrapper.find(".search-input").prop("type")).toEqual("text");
      expect(wrapper.find(".search-input").prop("value")).toEqual("");
    });
    it("should render Search button", () => {
      expect(wrapper.find(Button).exists()).toBe(true);
      expect(wrapper.find(Button).prop("primary")).toBe(true);
      expect(wrapper.find(Button).prop("disabled")).toBe(true);
    });
  });

  it("should render Checkbox toggle", () => {
    expect(wrapper.find(Checkbox).exists()).toBe(true);
    expect(wrapper.find(Checkbox).prop("label")).toEqual("3-column display");
  });
  it("should render the list", () => {
    expect(wrapper.find(".list").children()).toHaveLength(5);
  });
});
