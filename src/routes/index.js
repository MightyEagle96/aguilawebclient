import { BrowserRouter, Route, Routes } from "react-router-dom";
import { loggedInUser } from "../httpService";
import ExamConcluded from "../pages/ExamConcluded";
import ExamPage from "../pages/ExamPage";
import HomePage from "../pages/HomePage";

export default function MainRoutes() {
  const publicRoutes = [
    { path: "/", component: HomePage },
    { path: "/examConcluded", component: ExamConcluded },
  ];

  const privateRoutes = [{ path: "/", component: ExamPage }];
  return (
    <BrowserRouter>
      <Routes>
        {loggedInUser ? (
          <>
            {privateRoutes.map((c, o) => (
              <Route key={o} path={c.path} element={<c.component />} />
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
