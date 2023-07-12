import "@testing-library/jest-dom";
import { RouterProvider, createMemoryRouter} from "react-router-dom"
import { render, screen } from "@testing-library/react";
import routes from "../routes.js";

test("renders the <NavBar /> component", () => {
  const router = createMemoryRouter(routes)
  render(
      <RouterProvider router={router}/>
  );
  expect(document.querySelector(".navbar")).toBeInTheDocument();
});

test("renders an error page when given a bad URL", () =>{
    const router = createMemoryRouter(routes, {
        initialEntries: ["/bad-route"],
        initialIndex: 0
    })
    render(
        <RouterProvider router={router} />
    )
    expect(screen.getByText(/Whoops, that isn't the right page/g)).toBeInTheDocument()
})

test('renders the Home component on route "/"', () => {
  const router = createMemoryRouter(routes)
  render(
    <RouterProvider router={router}/>
);
  expect(screen.getByText(/Home Page/g)).toBeInTheDocument();
});

test('renders the Actors component on route "/actors"', () => {
    const router = createMemoryRouter(routes, {
        initialEntries: ['/actors'],
        initialIndex: 0
    })
  render(
    <RouterProvider router={router}/>
);
  expect(screen.getByText(/Actors Page/g)).toBeInTheDocument();
});

test('renders the Directors component on route "/directors"', () => {
    const router = createMemoryRouter(routes, {
        initialEntries: ['/directors'],
        initialIndex: 0
    })
  render(
      <RouterProvider router={router}/>
  );
  expect(screen.queryByText(/Directors Page/g)).toBeInTheDocument();
});

test('renders the Movies component on route "/movie/:title"', () => {
    const title = "Doctor Strange"
    const router = createMemoryRouter(routes, {
        initialEntries: [`/movie/${title}`],
        initialIndex: 0
    })
  render(
    <RouterProvider router={router}/>
);
  expect(screen.queryByText(/Doctor Strange/g)).toBeInTheDocument();
});
