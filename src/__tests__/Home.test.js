import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../components/Home";

test("renders 'Home Page' inside of a <h1 />", () => {
  render(<Home />);
  const h1 = screen.queryByText(/Home Page/g);
  expect(h1).toBeInTheDocument();
  expect(h1.tagName).toBe("H1");
});
