import { lazy } from "react";


const PriceListPage = lazy(() => import("../pages/PriceListPage"));
const NotFound = lazy(() => import("../pages/NotFound"));

export const routes = [
  {
    path: "/",
    element: <PriceListPage />,
  },
  {
    path: "/price-list",
    element: <PriceListPage />,
  },

  {
    path: "*",
    element: <NotFound />,
  },
];