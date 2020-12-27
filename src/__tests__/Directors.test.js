import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import Directors from "../components/Directors";
import { directors } from "../data";

test("renders without any errors", () => {
  const errorSpy = jest.spyOn(global.console, "error");

  render(<Directors />);

  expect(errorSpy).not.toHaveBeenCalled();

  errorSpy.mockRestore();
});

test("renders 'Directors Page' inside of a <h1 />", () => {
  render(<Directors />);
  const h1 = screen.queryByText(/Directors Page/g);
  expect(h1).toBeInTheDocument();
  expect(h1.tagName).toBe("H1");
});

test("renders each director's name", () => {
  render(<Directors />);
  for (const director of directors) {
    expect(
      screen.queryByText(director.name, { exact: false })
    ).toBeInTheDocument();
  }
});

test("renders a <li /> for each movie", () => {
  render(<Directors />);
  for (const director of directors) {
    for (const movie of director.movies) {
      const li = screen.queryByText(movie, { exact: false });
      expect(li).toBeInTheDocument();
      expect(li.tagName).toBe("LI");
    }
  }
});
