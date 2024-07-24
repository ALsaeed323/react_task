import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from '../context/AuthContext';
import FullLayout from '../layouts/FullLayout';
import ProtectedRoute from '../components/ProtectedRoute';

// Directly import components
import Signup from '../components/Signup/Signup';
import Signin from '../components/Signin/Signin';
import About from '../views/About';
import Alerts from '../views/ui/Alerts';
import Badges from '../views/ui/Badges';
import Buttons from '../views/ui/Buttons';
import Cards from '../views/ui/Cards';
import Grid from '../views/ui/Grid';
import Tables from '../views/ui/Tables';
import Forms from '../views/ui/Forms';
import Breadcrumbs from '../views/ui/Breadcrumbs';
import UserProfile from '../components/userProfile/userprofile';

const AppRoutes = () => {
  return (
    <AuthProvider>
      <Routes>
        {/* Public Routes */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />

        {/* Protected Routes */}
        <Route path="/" element={<FullLayout />}>
          <Route index element={<Navigate to="/" />} />
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
        <ProtectedRoute path="/profile" element={<UserProfile />} roles={['user']} />
      </Routes>
    </AuthProvider>
  );
};

export default AppRoutes;
