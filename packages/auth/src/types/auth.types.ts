import type { User as SupabaseUser, Session as SupabaseSession } from '@supabase/supabase-js';

export type UserType = 'tradesperson' | 'employer' | 'admin';

export interface SignUpData {
  userType: UserType;
}

export interface ProfileUpdate {
  userType?: UserType;
  // Add other profile fields as needed
}

export type User = SupabaseUser;
export type Session = SupabaseSession;

export interface AuthContextType {
  user: User | null;
  session: Session | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, userData: SignUpData) => Promise<void>;
  signOut: () => Promise<void>;
  updateProfile: (data: ProfileUpdate) => Promise<void>;
}
