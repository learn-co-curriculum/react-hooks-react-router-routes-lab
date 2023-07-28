import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter} from "react-router-dom";
import routes from "../routes";
import { actors } from "../data";

const router = createMemoryRouter(routes, {
  initialEntries: [`/actors`],
  initialIndex: 0
})

test("renders without any errors", () => {
  const errorSpy = jest.spyOn(global.console, "error");

  render(<RouterProvider router={router}/>);

  expect(errorSpy).not.toHaveBeenCalled();

  errorSpy.mockRestore();
});

test("renders 'Actors Page' inside of the <h1 />", () => {
  render(<RouterProvider router={router}/>);
  const h1 = screen.queryByText(/Actors Page/);
  expect(h1).toBeInTheDocument();
  expect(h1.tagName).toBe("H1");
});

test("renders each actor's name", () => {
  render(<RouterProvider router={router}/>);
  for (const actor of actors) {
    expect(
      screen.queryByText(actor.name, { exact: false })
    ).toBeInTheDocument();
  }
});

test("renders a <li /> for each movie", () => {
  render(<RouterProvider router={router}/>);
  for (const actor of actors) {
    for (const movie of actor.movies) {
      const li = screen.queryByText(movie, { exact: false });
      expect(li).toBeInTheDocument();
      expect(li.tagName).toBe("LI");
    }
  }
});
