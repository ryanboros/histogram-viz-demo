import { render } from "@testing-library/react";

import Home from "./Home";

describe("Home Page", () => {
  it("render home page", () => {
    const { getByTestId } = render(<Home />);

    const component = getByTestId("home-page");

    expect(component).not.toBeNull();
  });
});
