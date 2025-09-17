// Always load dotenv first
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
const dbRoot = path.resolve(__dirname, '..', '..');
dotenv.config({ path: path.join(dbRoot, '.env') });
console.log('Loaded env:', process.env.NEXT_PUBLIC_SUPABASE_URL ? 'URL OK' : 'URL MISSING', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'KEY OK' : 'KEY MISSING');
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
