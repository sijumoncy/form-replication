import React from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";
import { ApplicationForm } from "../../pages/application/ApplicationForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/form/test-form-1" />,
  },
  {
    path: "/form/:id?",
    element: <ApplicationForm />,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);

export default router;

export const FC: React.FC = () => <></>;
