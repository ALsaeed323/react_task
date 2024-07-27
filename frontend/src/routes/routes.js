import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import FullLayout from '../layouts/FullLayout';
import ProtectedRoute from '../src/components/ProtectedRoute';

// Lazy load components
const Signin = lazy(() => import('../src/components/Signin/Signin'));
const About = lazy(() => import('../src/views/About'));
const Alerts = lazy(() => import('../src/views/ui/Alerts'));
const Badges = lazy(() => import('../src/views/ui/Badges'));
const Buttons = lazy(() => import('../src/views/ui/Buttons'));
const Cards = lazy(() => import('../src/views/ui/Cards'));
const Grid = lazy(() => import('../src/views/ui/Grid'));
const Tables = lazy(() => import('../src/views/ui/Tables'));
const Forms = lazy(() => import('../src/views/ui/Forms'));
const Breadcrumbs = lazy(() => import('../src/views/ui/Breadcrumbs'));
const UserProfile = lazy(() => import('../src/components/userProfile/userprofile'));
const Signup = lazy(() => import('../src/components/Signup/Signup'));

const Loading = () => <div>Loading...</div>;

const AppRoutes = () => {
  return (
    <AuthProvider>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />         
          <Route path="/" element={<Navigate to="/signup" />} />
          <Route path="dashboard" element={<ProtectedRoute element={<FullLayout />} roles={['admin']} />}>
            <Route path="about" element={<ProtectedRoute element={<About />} roles={['admin']} />} />
            <Route path="alerts" element={<ProtectedRoute element={<Alerts />} roles={['admin']} />} />
            <Route path="badges" element={<ProtectedRoute element={<Badges />} roles={['admin']} />} />
            <Route path="buttons" element={<ProtectedRoute element={<Buttons />} roles={['admin']} />} />
            <Route path="cards" element={<ProtectedRoute element={<Cards />} roles={['admin']} />} />
            <Route path="grid" element={<ProtectedRoute element={<Grid />} roles={['admin']} />} />
            <Route path="table" element={<ProtectedRoute element={<Tables />} roles={['admin']} />} />
            <Route path="forms" element={<ProtectedRoute element={<Forms />} roles={['admin']} />} />
            <Route path="breadcrumbs" element={<ProtectedRoute element={<Breadcrumbs />} roles={['admin']} />} />
          </Route>
          <Route path="/profile" element={<ProtectedRoute element={<UserProfile />} roles={['user']} />} />
        </Routes>
      </Suspense>
    </AuthProvider>
  );
};

export default AppRoutes;
