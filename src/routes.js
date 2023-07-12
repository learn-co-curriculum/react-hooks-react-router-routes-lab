import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Directors from "./pages/Directors";
import Actors from "./pages/Actors";

const routes = [
    {
      path: '/',
      element: <Home />,
      errorElement: <ErrorPage />
    },
    {
      path: '/actors',
      element: <Actors />,
      errorElement: <ErrorPage />
    },
    {
      path: '/directors',
      element: <Directors />,
      errorElement: <ErrorPage />
    },
    {
      path: '/movie/:title',
      element: <Movie />,
      errorElement: <ErrorPage />
    }
  ]

export default routes;