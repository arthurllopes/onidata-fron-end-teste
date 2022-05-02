import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const location = useLocation();
    const user = 1
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    
    return children
}

export default ProtectedRoute