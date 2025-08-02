// import { lazy } from "react";
// const xxx = lazy(() => import('../../pages/applications'))

import { ApplicationManage } from "@/pages/application-manage";
import { Applications } from "@/pages/applications";
// import { Navigate, Route, Routes } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router";

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
      <Route path={AppRoutes.APPLICATION} Component={Applications} />
      <Route
        path={AppRoutes.CREATE_APPLICATION}
        Component={ApplicationManage}
      />
      <Route path={AppRoutes.EDIT_APPLICATION} Component={ApplicationManage} />
    </Routes>
  );
};

export default MainRouter;
