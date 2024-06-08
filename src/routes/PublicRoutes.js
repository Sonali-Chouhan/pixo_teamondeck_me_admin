import React from 'react';
const Login = React.lazy(() => import("../pages/Login/Login"));

const PublicRoutes = [
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
]
export default PublicRoutes;