import React from "react";
import { render } from "@testing-library/react";

import { Loading } from "./Loading";

test("should't render if loading is false", () => {
  const { baseElement } = render(<Loading loading={false} />);

  expect(baseElement.textContent).toBe("");
});

test("should render if loading is true", () => {
  const { getByTestId } = render(<Loading loading={true} />);

  expect(getByTestId("loading").classList).toContain("Loading");
});
