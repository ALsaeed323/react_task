import React, { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/
const Signup = lazy(() => import("../components/Signup/Signup.js"));
const Signin = lazy(() => import("../components/Signin/Signin.js"));
const About = lazy(() => import("../views/About.js"));
const Alerts = lazy(() => import("../views/ui/Alerts"));
const Badges = lazy(() => import("../views/ui/Badges"));
const Buttons = lazy(() => import("../views/ui/Buttons"));
const Cards = lazy(() => import("../views/ui/Cards"));
const Grid = lazy(() => import("../views/ui/Grid"));
const Tables = lazy(() => import("../views/ui/Tables"));
const Forms = lazy(() => import("../views/ui/Forms"));
const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));

function AppRoutes() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<FullLayout />}>
          <Route index element={<Navigate to="/" />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path="about" element={<About />} />
          <Route path="alerts" element={<Alerts />} />
          <Route path="badges" element={<Badges />} />
          <Route path="buttons" element={<Buttons />} />
          <Route path="cards" element={<Cards />} />
          <Route path="grid" element={<Grid />} />
          <Route path="table" element={<Tables />} />
          <Route path="forms" element={<Forms />} />
          <Route path="breadcrumbs" element={<Breadcrumbs />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default AppRoutes;
