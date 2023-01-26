import React, { createContext, useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReqAdvert from "./components/AddAdvert";
import AddPhotograph from "./components/AddPhotograph";
import AddStory from "./components/AddStory";
import AuthLayout from "./components/AuthLayout";
import IssueMagazine from "./components/IssueMagazine";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Payments from "./components/Payments";
import ViewMagazines from "./components/ViewMagazines";
import ViewPayments from "./components/ViewPayments";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "login", element: <Login /> },
      {
        element: <AuthLayout />,
        children: [
          { path: "add-story", element: <AddStory /> },
          { path: "view-payments", element: <ViewPayments /> },
          { path: "add-photograph", element: <AddPhotograph /> },
          { path: "payments", element: <Payments /> },
          { path: "req-advert", element: <ReqAdvert /> },
          { path: "issue-magazine", element: <IssueMagazine /> },
          { path: "view-magazines", element: <ViewMagazines /> },
        ],
      },
    ],
  },
]);

export const AuthContext = createContext();

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  return (
    <AuthContext.Provider value={[user, setUser]}>
      <RouterProvider router={router} />
    </AuthContext.Provider>
  );
}
