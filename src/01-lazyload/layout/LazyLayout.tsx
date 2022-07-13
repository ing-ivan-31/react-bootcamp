import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import {routes} from "../../routes/routes";

export const LazyLayout = () => {
  return (<div>
    <h1>LazyLayout Page</h1>
    <ul>
      <li>
        <NavLink to="lazy1">Lazy 1</NavLink>
      </li>
      <li>
        <NavLink to="lazy2">Lazy 2</NavLink>
      </li>
      <li>
        <NavLink to="lazy3">Lazy 3</NavLink>
      </li>
    </ul>

    <Routes>
      {routes.map((route) =>  {
        const {path, Component, to} = route;
        return <Route key={to} path={path} element={<Component />} />
      })}

      <Route path="*" element={<Navigate to="lazy1" replace />} />

    </Routes>
  </div>)
}

export default LazyLayout;
