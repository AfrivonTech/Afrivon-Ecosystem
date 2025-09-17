import React from 'react';
import { useAuth } from '../hooks/use-auth';

export const AuthGuard: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();
  if (loading) return <div>Loading...</div>;
  if (!user) return <div>Access denied. Please log in.</div>;
  return <>{children}</>;
};
