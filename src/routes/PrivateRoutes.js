import React from 'react';
import Employees from '../pages/Admin/Employee/Employees';
const Dashboard = React.lazy(() => import("../pages/Admin/Dashboard/Dashboard"));

const PrivateRoutes = [
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path:"/employees",
    element:<Employees/>

  }
]
export default PrivateRoutes;