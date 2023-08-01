import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter} from "react-router-dom";
import routes from "../routes.js";

const router = createMemoryRouter(routes)

test("renders 'Home Page' inside of an <h1 />", () => {
  render(<RouterProvider router={router}/>);
  const h1 = screen.queryByText(/Home Page/);
  expect(h1).toBeInTheDocument();
  expect(h1.tagName).toBe("H1");
});

test("Displays a list of movie titles", () =>{
  render(<RouterProvider router={router}/>);
  const titleList = screen.getAllByRole('heading', {level: 2})
  expect(titleList.length).toBe(3);
  expect(titleList[0].tagName).toBe("H2");
  expect(titleList[0].textContent).toBe("Doctor Strange");
})

test("Displays links for each associated movie", () =>{
  render(<RouterProvider router={router}/>);
  const linkList = screen.queryAllByText(/View Info/);
  expect(linkList.length).toBe(3);
  expect(linkList[0].href).toBe("http://localhost/movie/Doctor%20Strange");
})