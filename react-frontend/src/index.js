import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReqAdvert from "./components/AddAdvert";
import AddPhotograph from "./components/AddPhotograph";
import AddStory from "./components/AddStory";
import IssueMagazine from "./components/IssueMagazine";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Payments from "./components/Payments";
import ViewPayments from "./components/ViewPayments";
import reportWebVitals from "./reportWebVitals";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "login", element: <Login /> },
      { path: "add-story", element: <AddStory /> },
      { path: "view-payments", element: <ViewPayments /> },
      { path: "add-photograph", element: <AddPhotograph /> },
      { path: "payments", element: <Payments /> },
      { path: "req-advert", element: <ReqAdvert /> },
      { path: "issue-magazine", element: <IssueMagazine /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
