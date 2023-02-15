import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";

export default function MainRoutes() {
  const routes = [{ path: "/", component: HomePage }];
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((c) => (
          <Route path={c.path} element={<c.component />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
