import React, { useEffect, useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import LogInPage from "./Pages/LogInPage";
import DashBoard from "./Pages/Dashboard";
import Table from "./Pages/Table";
import GetKeeperPage from "./Pages/GetKeeperPage";
import CheckinLogin from "./Pages/CheckinLogin";

const App = () => {
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowPage(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  const router = createBrowserRouter([
    { path: "/", element: showPage ? <LogInPage /> : <LandingPage /> },
    { path: "/dashboard", element: <DashBoard /> }, 
    { path: "/checkin-login", element: <CheckinLogin /> }, 
    { path: "/get-keeper", element: <GetKeeperPage /> }, 
    { path: "table/:id", element: <Table /> },
  ]);
  

  return (
    <div className="MainBody">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
