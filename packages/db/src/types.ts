// This file is intended for generated types from Supabase schema
// You can use a tool like supabase gen types typescript --project-id <project-id> --schema public
// For now, add placeholder types for main tables

export interface Profile {
  id: string;
  email: string | null;
  full_name: string | null;
  avatar_url: string | null;
  user_type: 'tradesperson' | 'employer' | 'admin';
  created_at: string;
  updated_at: string;
}

export interface TradePass {
  id: string;
  user_id: string;
  profession: string;
  experience_years: number;
  certifications: string[];
  created_at: string;
}

export interface Job {
  id: string;
  company_id: string;
  title: string;
  description: string;
  location: string;
  salary_range: string;
  created_at: string;
}

export interface JobApplication {
  id: string;
  job_id: string;
  user_id: string;
  status: string;
  applied_at: string;
}

export interface Company {
  id: string;
  name: string;
  description: string;
  website: string;
  created_at: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  created_at: string;
}

export interface Enrollment {
  id: string;
  course_id: string;
  user_id: string;
  enrolled_at: string;
}

export interface Project {
  id: string;
  owner_id: string;
  name: string;
  description: string;
  created_at: string;
}

export interface Task {
  id: string;
  project_id: string;
  title: string;
  description: string;
  status: string;
  due_date: string;
  created_at: string;
}

export interface Post {
  id: string;
  user_id: string;
  content: string;
  created_at: string;
}

export interface Connection {
  id: string;
  user_id: string;
  connection_id: string;
  status: string;
  created_at: string;
}
