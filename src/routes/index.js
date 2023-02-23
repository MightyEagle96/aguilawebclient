import { BrowserRouter, Route, Routes } from "react-router-dom";
import { loggedInUser } from "../httpService";
import ExamPage from "../pages/ExamPage";
import HomePage from "../pages/HomePage";

export default function MainRoutes() {
  const publicRoutes = [{ path: "/", component: HomePage }];

  const privateRoutes = [{ path: "/", component: ExamPage }];
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
