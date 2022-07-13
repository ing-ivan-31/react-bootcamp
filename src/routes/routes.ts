import {lazy, LazyExoticComponent} from "react";
import {NoLazy} from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface Route {
  to: string;
  path:  string;
  Component: LazyExoticComponent<JSXComponent> | JSXComponent;
  name:  string;
}

const LazyLoad1 = lazy(/* webpackChunkName: "LazyLoadPage1" */() => import('../01-lazyload/pages/lazyPage1'))
const LazyLoad2= lazy(/* webpackChunkName: "LazyLoadPage2" */() => import('../01-lazyload/pages/lazyPage2'))
const LazyLoad3 = lazy(/* webpackChunkName: "LazyLoadPage3" */() => import('../01-lazyload/pages/lazyPage3'))

const LazyLayout = lazy(/* webpackChunkName: "LazyLayout" */() => import('../01-lazyload/layout/LazyLayout'))

export const routes : Route[] = [
  {
    to: '/lazy1',
    path: 'lazy1',
    Component: LazyLoad1,
    name: 'Lazy 1',
  },
  {
    to: '/lazy2',
    path: 'lazy2',
    Component: LazyLoad2,
    name: 'Lazy 2',
  },
  {
    to: '/lazy3',
    path: 'lazy3',
    Component: LazyLoad3,
    name: 'Lazy 3',
  },
  {
    to: '/lazyLayout/',
    path: '/lazyLayout/*',
    Component: LazyLayout,
    name: 'Lazy Layout',
  },
  {
    to: '/nolazy',
    path: 'nolazy',
    Component: NoLazy,
    name: 'No Lazy',
  }
]