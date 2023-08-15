import React from "react";

import async from "../components/Async";

import {
  Monitor,
  Sliders,
} from "react-feather";

// DashBoard
const Dashboard = async(() => import("../pages/dashboard/Dashboard"));

const landingRoutes = {
  id: "Landing Page",
  path: "/",
  header: "Docs",
  icon: <Monitor />,
  component: Dashboard,
  children: null,
};

const dashboardsRoutes = {
  id: "Dashboard",
  path: "/dashboard",
  header: "Pages",
  icon: <Sliders />,
  containsHome: true,
  children: [
    {
      path: "/dashboard/default",
      name: "Default",
      component: Dashboard,
    }
  ],
  component: null,
};

// Routes using the Dashboard layout
export const dashboardLayoutRoutes = [
  landingRoutes,
  dashboardsRoutes
];


// Routes visible in the sidebar
export const sidebarRoutes = [
  dashboardsRoutes
];

