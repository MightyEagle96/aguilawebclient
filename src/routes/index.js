import { BrowserRouter, Route, Routes } from "react-router-dom";
import { loggedInUser } from "../httpService";
import HomePage from "../pages/HomePage";
import InstructionPage from "../pages/InstructionPage";

export default function MainRoutes() {
  const publicRoutes = [{ path: "/", component: HomePage }];

  const privateRoutes = [{ path: "/", component: InstructionPage }];
  return (
    <BrowserRouter>
      <Routes>
        {loggedInUser ? (
          <>
            {privateRoutes.map((c) => (
              <Route path={c.path} element={<c.component />} />
            ))}
          </>
        ) : (
          <>
            {publicRoutes.map((c) => (
              <Route path={c.path} element={<c.component />} />
            ))}
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}
