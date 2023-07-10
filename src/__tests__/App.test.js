import "@testing-library/jest-dom";
import React from "react";
import {Router, RouterProvider, createMemoryRouter} from "react-router-dom"
import { render, screen } from "@testing-library/react";
import ErrorPage from "../pages/ErrorPage";
import App from "../App";
import Home from "../pages/Home";
import Actors from "../pages/Actors";
import Directors from "../pages/Directors";
import Movies from "../pages/Movies";

const routes = [
        {
          path: '/',
          element: <App />,
          errorElement: <ErrorPage />,
          children: [
            {
              path: '/',
              element: <Home />,
            },
            {
              path: '/actors',
              element: <Actors />
            },
            {
              path: '/directors',
              element: <Directors />
            },
            {
              path: '/movies',
              element: <Movies />
            }
          ]
        }
      ]

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

test('renders the Home component using the <Route path="/">', () => {
  const router = createMemoryRouter(routes)
  render(
    <RouterProvider router={router}/>
);
  expect(screen.getByText(/Home Page/g)).toBeInTheDocument();
});

test('renders the Actors component using the <Route path="/actors">', () => {
    const router = createMemoryRouter(routes, {
        initialEntries: ['/actors'],
        initialIndex: 0
    })
  render(
    <RouterProvider router={router}/>
);
  expect(screen.getByText(/Actors Page/g)).toBeInTheDocument();
});

test('renders the Directors component using the <Route path="/directors">', () => {
    const router = createMemoryRouter(routes, {
        initialEntries: ['/directors'],
        initialIndex: 0
    })
  render(
      <RouterProvider router={router}/>
  );
  expect(screen.queryByText(/Directors Page/g)).toBeInTheDocument();
});

test('renders the Movies component using the <Route path="/movies">', () => {
    const router = createMemoryRouter(routes, {
        initialEntries: ['/movies'],
        initialIndex: 0
    })
  render(
    <RouterProvider router={router}/>
);
  expect(screen.queryByText(/Movies Page/g)).toBeInTheDocument();
});
