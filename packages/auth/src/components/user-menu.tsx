import React from 'react';
import { useAuth } from '../hooks/use-auth';
import { Button } from '@afrivon/ui';

export const UserMenu: React.FC = () => {
  const { user, signOut } = useAuth();
  if (!user) return null;
  return (
    <div>
      <span>{user.email}</span>
      <Button onClick={signOut}>Logout</Button>
    </div>
  );
};
