import React, { useState, useEffect, useCallback } from 'react';
import { AuthContext } from './auth-context';
import { supabase } from './auth-client';
import { AuthContextType, User, Session, SignUpData, ProfileUpdate } from './types/auth.types';
import { createProfileIfNeeded } from './utils/auth-helpers';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setUser(data.session?.user ?? null);
      setLoading(false);
    });
    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  const signIn = useCallback(async (email: string, password: string) => {
    setLoading(true);
    await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
  }, []);

  const signUp = useCallback(async (email: string, password: string, userData: SignUpData) => {
    setLoading(true);
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (data.user) {
      await createProfileIfNeeded(data.user, userData);
    }
    setLoading(false);
    if (error) throw error;
  }, []);

  const signOut = useCallback(async () => {
    setLoading(true);
    await supabase.auth.signOut();
    setUser(null);
    setSession(null);
    setLoading(false);
  }, []);

  const updateProfile = useCallback(async (data: ProfileUpdate) => {
    // Implement profile update logic here
  }, []);

  const value: AuthContextType = {
    user,
    session,
    loading,
    signIn,
    signUp,
    signOut,
    updateProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
