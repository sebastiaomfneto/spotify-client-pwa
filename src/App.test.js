import React from "react";
import { render } from "@testing-library/react";

import App from "./App";

it("should render app", () => {
  const { getByTestId } = render(<App />);

  expect(getByTestId("app")).toBeInTheDocument();
});
