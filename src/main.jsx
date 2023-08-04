import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import React from "react";
import Home from "./Components/Home";
import Weather from "./Components/Weather";
import { AppProvider } from "./Context/AppContext";
import RouteError from "./components/errorComponents/RouteError";
import ApiError from "./components/errorComponents/ApiError";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <RouteError />,
  },
  {
    path: "/weather",
    element: <Weather />,
    errorElement: <RouteError />,
  },
  {
    path: "/error",
    element: <ApiError />,
    errorElement: <RouteError />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={appRouter} />
    </AppProvider>
  </React.StrictMode>
);
