import "@testing-library/jest-dom";
import { RouterProvider, createMemoryRouter} from "react-router-dom"
import { render, screen } from "@testing-library/react";
import routes from "../routes";
import { directors } from "../data";

const router = createMemoryRouter(routes, {
  initialEntries: [`/directors`],
  initialIndex: 0
})

test("renders without any errors", () => {
  const errorSpy = jest.spyOn(global.console, "error");

  render(<RouterProvider router={router}/>);

  expect(errorSpy).not.toHaveBeenCalled();

  errorSpy.mockRestore();
});

test("renders 'Directors Page' inside of a <h1 />", () => {
  render(<RouterProvider router={router}/>);
  const h1 = screen.queryByText(/Directors Page/);
  expect(h1).toBeInTheDocument();
  expect(h1.tagName).toBe("H1");
});

test("renders each director's name", async () => {
  render(<RouterProvider router={router}/>);
  for (const director of directors) {
    expect(
      await screen.findByText(director.name, { exact: false })
    ).toBeInTheDocument();
  }
});

test("renders a <li /> for each movie", async () => {
  render(<RouterProvider router={router}/>);
  for (const director of directors) {
    for (const movie of director.movies) {
      const li = await screen.findByText(movie, { exact: false });
      expect(li).toBeInTheDocument();
      expect(li.tagName).toBe("LI");
    }
  }
});

test("renders the <NavBar /> component", () => {
  const router = createMemoryRouter(routes, {
    initialEntries: ['/directors']
  })
  render(
      <RouterProvider router={router}/>
  );
  expect(document.querySelector(".navbar")).toBeInTheDocument();
});
