import './dashboard.css';
import { getUserSession } from '@/lib/keycloak/session';

async function Dashboard() {
  // Fetch the user data securely on the server
  const user = await getUserSession();

  // Keycloak typically provides 'name', 'given_name', and 'preferred_username'.
  // Fallback to a default string if the claims are missing.
  const displayName = user?.name || user?.preferred_username || 'Dummy Agent';

  return (
    <div className="w-screen h-[80dvh]">
      Dashboard, User name is {displayName}
    </div>
  );
}

export default Dashboard;
