import { useRoutes } from "react-router-dom";
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';
import { AppHeader } from "../component/Layout";
const isAuth = localStorage.getItem('name');

export function AppRoute() {

  // add localstorage isAuth here
  let allRoutes = PublicRoutes;

  if (isAuth) {
    allRoutes = PrivateRoutes;
  }
  let element = useRoutes(allRoutes)
  return isAuth ? (
    <AppHeader>
      {element}
    </AppHeader>)
    :
    element
}