import { supabase } from '../client.js';
import type { Profile } from '../types.js';

export const getProfile = async (id: string) => {
  const { data, error } = await supabase.from('profiles').select('*').eq('id', id).single();
  if (error) throw error;
  return data as Profile;
};

export const createProfile = async (profile: Omit<Profile, 'created_at' | 'updated_at'>) => {
  const { data, error } = await supabase.from('profiles').insert(profile).single();
  if (error) throw error;
  return data as Profile;
};
