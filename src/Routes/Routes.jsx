import { createBrowserRouter } from "react-router-dom";
import Main from '../main'
import Home from '../Layout/Home'

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
    ],
  },
]);
