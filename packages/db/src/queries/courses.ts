import { supabase } from '../client.js';
import type { Course } from '../types.js';

export const getCourse = async (id: string) => {
  const { data, error } = await supabase.from('courses').select('*').eq('id', id).single();
  if (error) throw error;
  return data as Course;
};

export const createCourse = async (course: Omit<Course, 'created_at'>) => {
  const { data, error } = await supabase.from('courses').insert(course).single();
  if (error) throw error;
  return data as Course;
};
