import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import Movie from "../pages/Movie";
import { movies } from "../data";

test("renders without any errors", () => {
  const errorSpy = jest.spyOn(global.console, "error");

  render(<Movie />);

  expect(errorSpy).not.toHaveBeenCalled();

  errorSpy.mockRestore();
});

test("renders 'Movies Page' inside of a <h1 />", () => {
  render(<Movie />);
  const h1 = screen.queryByText(/Movies Page/g);
  expect(h1).toBeInTheDocument();
  expect(h1.tagName).toBe("H1");
});

test("renders each movie's title and time", () => {
  render(<Movie />);
  for (const movie of movies) {
    expect(
      screen.queryByText(movie.title, { exact: false })
    ).toBeInTheDocument();
    expect(
      screen.queryByText(movie.time.toString(), { exact: false })
    ).toBeInTheDocument();
  }
});

test("renders a <li /> for each genre", () => {
  render(<Moview />);
  for (const movie of movies) {
    for (const genre of movie.genres) {
      const li = screen.queryAllByText(genre, { exact: false })[0];
      expect(li).toBeInTheDocument();
      expect(li.tagName).toBe("LI");
    }
  }
});
