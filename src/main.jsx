import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App";
import Widget from "./Components/widget";
// import ApiError from "./Components/ApiError";
import RouteError from "./Components/RouteError";
import { AppProvider } from "./Context/AppContext";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <RouteError />,
  },
  {
    path: "/widget",
    element: <Widget />,
    errorElement: <RouteError />,
  },
  // {
  //   path: "/error",
  //   element: <ApiError />,
  //   errorElement: <RouteError />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppProvider>
      <RouterProvider router={appRouter} />
    </AppProvider>
  </React.StrictMode>
);
