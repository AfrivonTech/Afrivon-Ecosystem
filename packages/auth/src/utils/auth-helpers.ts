import { supabase } from '../auth-client';
import { User, SignUpData } from '../types/auth.types';

export async function createProfileIfNeeded(user: User, data: SignUpData) {
  // Insert a new profile row if not exists
  await supabase.from('profiles').upsert({
    id: user.id,
    email: user.email,
    user_type: data.userType,
  }, { onConflict: 'id' });
}
