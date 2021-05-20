import { Header } from "./Header";
import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Button, Checkbox, Input } from "semantic-ui-react";

configure({ adapter: new Adapter() });

describe("Header", () => {
  let wrapper;
  const mockProps = {
    handleSearch: jest.fn(),
    inputValue: "lion",
    setInputValue: jest.fn(),
    setChecked: jest.fn(),
    checked: true,
  };

  beforeEach(() => {
    wrapper = shallow(<Header {...mockProps} />);
  });

  it("should render Header", () => {
    expect(wrapper.find(".header").exists()).toBe(true);
  });
  it("should render heading", () => {
    expect(wrapper.find("h1").text()).toEqual("GIPHYGRAM");
  });

  describe("Search form", () => {
    it("should render form", () => {
      expect(wrapper.find("form").exists()).toBe(true);
      expect(wrapper.find("form").prop("className")).toEqual("search-form");
    });
    it("should render Input", () => {
      expect(wrapper.find(Input).exists()).toBe(true);
      expect(wrapper.find(Input).prop("placeholder")).toEqual("Search...");
      expect(wrapper.find(Input).prop("value")).toEqual("lion");
      expect(wrapper.find(Input).prop("className")).toEqual("search-input");
      expect(wrapper.find(Input).prop("type")).toEqual("text");
    });
    it("should render Search button", () => {
      expect(wrapper.find(Button).exists()).toBe(true);
    });
    it("should render Checkbox", () => {
      expect(wrapper.find(Checkbox).exists()).toBe(true);
      expect(wrapper.find(Checkbox).prop("label")).toEqual("3-column display");
      expect(wrapper.find(Checkbox).prop("type")).toEqual("checkbox");
    });
  });
});
