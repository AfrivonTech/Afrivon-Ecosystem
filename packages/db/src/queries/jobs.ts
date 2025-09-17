import { supabase } from '../client.js';
import type { Job } from '../types.js';

export const getJob = async (id: string) => {
  const { data, error } = await supabase.from('jobs').select('*').eq('id', id).single();
  if (error) throw error;
  return data as Job;
};

export const createJob = async (job: Omit<Job, 'created_at'>) => {
  const { data, error } = await supabase.from('jobs').insert(job).single();
  if (error) throw error;
  return data as Job;
};
