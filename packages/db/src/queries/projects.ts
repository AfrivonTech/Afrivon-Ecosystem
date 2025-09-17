import { supabase } from '../client.js';
import type { Project } from '../types.js';

export const getProject = async (id: string) => {
  const { data, error } = await supabase.from('projects').select('*').eq('id', id).single();
  if (error) throw error;
  return data as Project;
};

export const createProject = async (project: Omit<Project, 'created_at'>) => {
  const { data, error } = await supabase.from('projects').insert(project).single();
  if (error) throw error;
  return data as Project;
};
