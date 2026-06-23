import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import ProductDetails from "../components/ProductDetails";
import Loading from "../components/Loading";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    hydrateFallbackElement: <Loading />,
    children: [
      {
        index: true,
        element: <HomePage></HomePage>,
      },
      {
        path: "product/:id",
        element: <ProductDetails></ProductDetails>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);
