import "@testing-library/jest-dom";
import { RouterProvider, createMemoryRouter} from "react-router-dom"
import { render, screen } from "@testing-library/react";
import routes from "../routes";

const title = "Doctor Strange"
const router = createMemoryRouter(routes, {
    initialEntries: [`/movie/${title}`],
    initialIndex: 0
})

test("renders without any errors", () => {
  const errorSpy = jest.spyOn(global.console, "error");

  render(<RouterProvider router={router} />);

  expect(errorSpy).not.toHaveBeenCalled();

  errorSpy.mockRestore();
});

test("renders movie's title in an h1", () => {
  render(<RouterProvider router={router} />);
  const h1 = screen.queryByText(/Doctor Strange/);
  expect(h1).toBeInTheDocument();
  expect(h1.tagName).toBe("H1");
});

test("renders movie's time within a p tag", () => {
  render(<RouterProvider router={router} />);
  const p = screen.queryByText(/115/);
  expect(p).toBeInTheDocument();
  expect(p.tagName).toBe("P");
});

test("renders a span for each genre", () => {
  render(<RouterProvider router={router} />);
  const genres = ["Action", "Adventure", "Fantasy"];
  genres.forEach(genre =>{
    const span = screen.queryByText(genre);
    expect(span).toBeInTheDocument();
    expect(span.tagName).toBe("SPAN");
  })
});
