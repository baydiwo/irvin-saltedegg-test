/**
 *
 * Tests for Home
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from "react";
import { render } from "react-testing-library";
// import 'jest-dom/extend-expect'; // add some helpful assertions
import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { shallow } from "enzyme";
import { Home } from "../index";
import { Button } from "antd";

configure({ adapter: new Adapter() });

describe("<Home />", () => {
  it.skip("Expect to not log errors in console", () => {
    const spy = jest.spyOn(global.console, "error");
    const dispatch = jest.fn();
    render(<Home dispatch={dispatch} />);
    expect(spy).not.toHaveBeenCalled();
  });

  it("it should call handleClick", () => {
    const handleClick = jest.fn();
    const id = "Iphone 7";
    const wrapper = shallow(<Button onClick={handleClick(id)} />);
    wrapper.find("button").simulate("click");
    expect(handleClick).toBeCalledWith(id);
  });

  /**
   * Unskip this test to use it
   *
   * @see {@link https://jestjs.io/docs/en/api#testskipname-fn}
   */
  it.skip("Should render and match the snapshot", () => {
    const {
      container: { firstChild }
    } = render(<Home />);
    expect(firstChild).toMatchSnapshot();
  });
});
