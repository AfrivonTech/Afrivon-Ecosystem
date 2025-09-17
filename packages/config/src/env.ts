/// <reference types="node" />
import { z } from 'zod';
import type { Env } from './types';

const envSchema = z.object({
  NEXT_PUBLIC_SUPABASE_URL: z.string().url(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string(),
  SUPABASE_SERVICE_ROLE_KEY: z.string(),
  DATABASE_URL: z.string(),
  NEXT_PUBLIC_WEBSITE_URL: z.string().url(),
  NEXT_PUBLIC_CAREER_KIT_URL: z.string().url(),
  NEXT_PUBLIC_TRADE_LINK_URL: z.string().url(),
  NEXT_PUBLIC_LEARNING_HUB_URL: z.string().url(),
  NEXT_PUBLIC_WORK_FLOW_URL: z.string().url(),
  NEXT_PUBLIC_CONNECT_URL: z.string().url(),
  NEXT_PUBLIC_HQ_WEB_URL: z.string().url(),
  NEXT_PUBLIC_API_URL: z.string().url(),
  NODE_ENV: z.enum(['development', 'production', 'test']),
  NEXT_PUBLIC_APP_NAME: z.string(),
  NEXT_PUBLIC_APP_VERSION: z.string(),
});

export const env: Env = envSchema.parse(process.env);
