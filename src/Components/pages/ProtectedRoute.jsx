// import React from 'react'
// import { Navigate, Outlet } from 'react-router-dom';

// const ProtectedRoute = () => {

//     const token = localStorage.getItem("token");

//     return token ? <Outlet /> : <Navigate to="/" />
// }

// export default ProtectedRoute








import { jwtDecode } from 'jwt-decode';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/" />;
  }

  try {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000 ; // Current time in seconds
    

    if (decodedToken.exp < currentTime) {
      // Token expired, clear the token and redirect to login
      localStorage.removeItem("token");
      return <Navigate to="/" />;
    }

    // Token is valid
    return <Outlet />;
  } catch (error) {
    // Invalid token (e.g., not a valid JWT)
    localStorage.removeItem("token");
    return <Navigate to="/" />;
  }
};

export default ProtectedRoute;

