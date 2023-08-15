import { useAuth } from "../Context/ResumeContext";
import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({children}) => {
    const { authUser, checkAuth, setCheckAuth, makePostRequest, setAuthUser } = useAuth();
    
    useEffect(() => {
        if (authUser && !checkAuth) {
            const authStatus = makePostRequest('/api/v1/auth')
            authStatus.then(item => {
                if (!authStatus.user) {
                    setAuthUser(null)
                }    
            })
            setCheckAuth(true)
        }    
    })

    if (!authUser) {
        return <Navigate to='/login'/>
    }
    return children;
}