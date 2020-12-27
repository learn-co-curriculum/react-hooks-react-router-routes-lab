import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import App from "../components/App";

test("renders the <NavBar /> component", () => {
  const history = createMemoryHistory();
  const { container } = render(
    <Router history={history}>
      <App />
    </Router>
  );
  expect(container.querySelector(".navbar")).toBeInTheDocument();
});

test('renders the Home component using the <Route path="/">', () => {
  const history = createMemoryHistory();
  history.push("/");
  render(
    <Router history={history}>
      <App />
    </Router>
  );
  expect(screen.queryByText(/Home Page/g)).toBeInTheDocument();
});

test('renders the Actors component using the <Route path="/actors">', () => {
  const history = createMemoryHistory();
  history.push("/actors");
  render(
    <Router history={history}>
      <App />
    </Router>
  );
  expect(screen.queryByText(/Actors Page/g)).toBeInTheDocument();
});

test('renders the Directors component using the <Route path="/directors">', () => {
  const history = createMemoryHistory();
  history.push("/directors");
  render(
    <Router history={history}>
      <App />
    </Router>
  );
  expect(screen.queryByText(/Directors Page/g)).toBeInTheDocument();
});

test('renders the Movies component using the <Route path="/movies">', () => {
  const history = createMemoryHistory();
  history.push("/movies");
  render(
    <Router history={history}>
      <App />
    </Router>
  );
  expect(screen.queryByText(/Movies Page/g)).toBeInTheDocument();
});
