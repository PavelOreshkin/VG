import { ApplicationManage } from "@/pages/application-manage";
import { Applications } from "@/pages/applications";
import { AppRoutes } from "@/shared/routes";
import { Routes, Route, Navigate } from "react-router";

// import { lazy } from "react";
// const xxx = lazy(() => import('../../pages/applications'))

const MainRouter = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to={AppRoutes.APPLICATIONS} replace />}
      />
      <Route path={AppRoutes.APPLICATIONS} Component={Applications} />
      <Route
        path={AppRoutes.CREATE_APPLICATION}
        Component={ApplicationManage}
      />
      <Route path={AppRoutes.EDIT_APPLICATION} Component={ApplicationManage} />
    </Routes>
  );
};

export default MainRouter;
