import { LazyExoticComponent} from "react";
import Home from "../Components/Home";
import About from "../Components/About";
import Users from "../Components/Users";
import {ShoppingPage} from "../ComponentPatterns/pages/ShoppingPage";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path:  string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name:  string;
}
export const routes : Route[] = [
  {
    to: '/',
    path: '/',
    Component: ShoppingPage,
    name: 'Shopping Page',
  },
  {
    to: '/about',
    path: 'about',
    Component: About,
    name: 'About',
  },
  {
    to: '/users',
    path: 'users',
    Component: Users,
    name: 'Users',
  },
]