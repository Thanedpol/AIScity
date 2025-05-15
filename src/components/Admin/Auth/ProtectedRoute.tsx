import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../../hooks/useAuth';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requireAdmin?: boolean;
}

export default function ProtectedRoute({ children, requireAdmin = false }: ProtectedRouteProps) {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!user) {
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  if (requireAdmin && !user.isAdmin) {
    return <Navigate to="/admin" replace />;
  }

  return <>{children}</>;
}