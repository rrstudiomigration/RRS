import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = useAuth();
  const location = useLocation();

  return !auth?.user ? <Navigate to="/login" state={{ from: location }} replace /> : children;
}

export default RequireAuth;
