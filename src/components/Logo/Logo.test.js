import React from "react";
import { render } from "@testing-library/react";

import { Logo } from "./Logo";

test("should render", () => {
  const { getByTestId } = render(<Logo />);

  expect(getByTestId("logo").classList).toContain("Logo");
});
