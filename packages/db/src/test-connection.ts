
// Load env vars from .env for Node.js scripts
// Always load dotenv first
import dotenv from 'dotenv';
import path from 'path';
const dbRoot = path.resolve(__dirname, '..', '..');
dotenv.config({ path: path.join(dbRoot, '.env') });
console.log('Loaded env in test:', process.env.NEXT_PUBLIC_SUPABASE_URL ? 'URL OK' : 'URL MISSING', process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ? 'KEY OK' : 'KEY MISSING');
import { supabase } from './client.js';

async function testConnection() {
  const { data, error } = await supabase.from('profiles').select('*').limit(1);
  if (error) {
    console.error('Supabase connection error:', error.message);
    process.exit(1);
  }
  console.log('Supabase connection successful. Sample data:', data);
}

testConnection();
