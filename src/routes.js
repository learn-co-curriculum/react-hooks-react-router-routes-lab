import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Directors from "./pages/Directors";

const routes = [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/movie/:title",
      element: <Movie />
    },
    {
      path: "/directors",
      element: <Directors />
    }
  ]

export default routes;