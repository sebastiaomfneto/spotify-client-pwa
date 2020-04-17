import React from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { Nav } from "./Nav";

test("should render title", () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <Nav />
    </MemoryRouter>
  );

  expect(getByTestId("title").textContent).toBe("Browse");
});

test("should render links", () => {
  const { baseElement } = render(
    <MemoryRouter>
      <Nav />
    </MemoryRouter>
  );

  expect(
    Array.from(baseElement.getElementsByTagName("a")).map((i) => i.textContent)
  ).toEqual(["Artists", "Albums", "Tracks"]);
});
