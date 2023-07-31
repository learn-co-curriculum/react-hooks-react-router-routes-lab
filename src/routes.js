import Home from "./pages/Home";
import Movie from "./pages/Movie"

const routes = [
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/movie",
      element: <Movie />
    }
  ]

export default routes;