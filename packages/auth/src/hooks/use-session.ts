import { useAuth } from './use-auth';

export function useSession() {
  const { session } = useAuth();
  return session;
}
