import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "shared";

import { URLs } from "../URLs";

export const ProtectedRoute = () => {
  const { user, loading, error } = useUser();

  if (loading) {
    return <div>Loading...</div>; // Or a spinner/loading indicator
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Optionally handle errors
  }

  return user ? <Outlet /> : <Navigate to={URLs.login} />;
};
