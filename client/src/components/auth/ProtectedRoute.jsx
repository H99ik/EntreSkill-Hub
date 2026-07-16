import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, allowedRoles }) {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const token = userInfo?.token;

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(userInfo?.role)) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;
