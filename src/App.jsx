//react-router-dom
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

//pages
import { About, Home, Recipe, Recipes } from "./pages";

// main Layout
import MainLayout from "./layouts/MainLayout";
import { actioc } from "./pages/Home";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
          action: actioc,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/recipe/:id",
          element: <Recipe />,
        },
        {
          path: "/recipes",
          element: <Recipes />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
