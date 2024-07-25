import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import FullLayout from '../layouts/FullLayout';
import ProtectedRoute from '../components/ProtectedRoute';

// Lazy load components
const Signin = lazy(() => import('../components/Signin/Signin'));
const About = lazy(() => import('../views/About'));
const Alerts = lazy(() => import('../views/ui/Alerts'));
const Badges = lazy(() => import('../views/ui/Badges'));
const Buttons = lazy(() => import('../views/ui/Buttons'));
const Cards = lazy(() => import('../views/ui/Cards'));
const Grid = lazy(() => import('../views/ui/Grid'));
const Tables = lazy(() => import('../views/ui/Tables'));
const Forms = lazy(() => import('../views/ui/Forms'));
const Breadcrumbs = lazy(() => import('../views/ui/Breadcrumbs'));
const UserProfile = lazy(() => import('../components/userProfile/userprofile'));
const Signup = lazy(() => import('../components/Signup/Signup'));

const Loading = () => <div>Loading...</div>;

const AppRoutes = () => {
  return (
    <AuthProvider>
      <Suspense fallback={<Loading />}>
        <Routes>
          {/* Public Routes */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />

          {/* Default Redirect */}
          <Route path="/" element={<Navigate to="/signup" />} />

          {/* Protected Routes */}
          {/* <Route path="/" element={<FullLayout />}>
            <Route index element={<Navigate to="/signup" />} />
            <ProtectedRoute path="about" element={<About />} roles={['admin']} />
            <ProtectedRoute path="alerts" element={<Alerts />} roles={['admin']} />
            <ProtectedRoute path="badges" element={<Badges />} roles={['admin']} />
            <ProtectedRoute path="buttons" element={<Buttons />} roles={['admin']} />
            <ProtectedRoute path="cards" element={<Cards />} roles={['admin']} />
            <ProtectedRoute path="grid" element={<Grid />} roles={['admin']} />
            <ProtectedRoute path="table" element={<Tables />} roles={['admin']} />
            <ProtectedRoute path="forms" element={<Forms />} roles={['admin']} />
            <ProtectedRoute path="breadcrumbs" element={<Breadcrumbs />} roles={['admin']} />
          </Route>
          <ProtectedRoute path="/profile" element={<UserProfile />} roles={['user']} /> */}
        </Routes>
      </Suspense>
    </AuthProvider>
  );
};

export default AppRoutes;
