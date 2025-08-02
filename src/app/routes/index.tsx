import { Navigate, Route, Routes } from "react-router-dom";

export const AppRoutes = {
  APPLICATION: "/applications",
  CREATE_APPLICATION: "/create-application",
  EDIT_APPLICATION: "/edit-application",

  application: (id: string) => `/applications/${id}`,
} as const;

const MainRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to={AppRoutes.APPLICATION} replace />}
      />
      <Route path={AppRoutes.APPLICATION} element={<p>APPLICATION</p>} />
      <Route
        path={AppRoutes.CREATE_APPLICATION}
        element={<p>CREATE_APPLICATION</p>}
      />
      <Route
        path={AppRoutes.EDIT_APPLICATION}
        element={<p>EDIT_APPLICATION</p>}
      />
    </Routes>
  );
};

export default MainRouter;
