import React, { useState } from 'react';
import { useAuth } from '../hooks/use-auth';
import { Button, Input, Select } from '@afrivon/ui';
import { UserType, SignUpData } from '../types/auth.types';

const userTypes: UserType[] = ['tradesperson', 'employer', 'admin'];

export const SignupForm: React.FC = () => {
  const { signUp, loading } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState<UserType>('tradesperson');
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    const data: SignUpData = { userType };
    try {
      await signUp(email, password, data);
    } catch (err: any) {
      setError(err.message || 'Signup failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
  <Input type="email" value={email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)} placeholder="Email" required />
  <Input type="password" value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} placeholder="Password" required />
      <Select
        value={userType}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setUserType(e.target.value as UserType)}
        options={userTypes.map(type => ({ label: type, value: type }))}
      />
      {error && <div>{error}</div>}
      <Button type="submit" disabled={loading}>Sign Up</Button>
    </form>
  );
};
