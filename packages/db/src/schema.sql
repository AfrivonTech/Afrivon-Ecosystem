-- User Management
CREATE TABLE IF NOT EXISTS profiles (
  id UUID REFERENCES auth.users PRIMARY KEY,
  email TEXT,
  full_name TEXT,
  avatar_url TEXT,
  user_type TEXT CHECK (user_type IN ('tradesperson', 'employer', 'admin')),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS trade_passes (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES profiles(id),
  profession TEXT,
  experience_years INT,
  certifications TEXT[],
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Marketplace
CREATE TABLE IF NOT EXISTS jobs (
  id UUID PRIMARY KEY,
  company_id UUID REFERENCES companies(id),
  title TEXT,
  description TEXT,
  location TEXT,
  salary_range TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS job_applications (
  id UUID PRIMARY KEY,
  job_id UUID REFERENCES jobs(id),
  user_id UUID REFERENCES profiles(id),
  status TEXT,
  applied_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS companies (
  id UUID PRIMARY KEY,
  name TEXT,
  description TEXT,
  website TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Learning
CREATE TABLE IF NOT EXISTS courses (
  id UUID PRIMARY KEY,
  title TEXT,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS enrollments (
  id UUID PRIMARY KEY,
  course_id UUID REFERENCES courses(id),
  user_id UUID REFERENCES profiles(id),
  enrolled_at TIMESTAMPTZ DEFAULT NOW()
);

-- Projects
CREATE TABLE IF NOT EXISTS projects (
  id UUID PRIMARY KEY,
  owner_id UUID REFERENCES profiles(id),
  name TEXT,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS tasks (
  id UUID PRIMARY KEY,
  project_id UUID REFERENCES projects(id),
  title TEXT,
  description TEXT,
  status TEXT,
  due_date TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Social
CREATE TABLE IF NOT EXISTS posts (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES profiles(id),
  content TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS connections (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES profiles(id),
  connection_id UUID REFERENCES profiles(id),
  status TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);
