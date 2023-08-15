import { useAuth } from "../Context/ResumeContext";
import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";

export const LoggedInCheck = ({ children }) => {
    const { authUser, checkAuth, setCheckAuth, makePostRequest, setAuthUser } = useAuth();

    useEffect(() => {
        if (!authUser && !checkAuth) {
            const authStatus = makePostRequest('/api/v1/auth')
            authStatus.then(item => {
                if (authStatus.user && authStatus.success) {
                    setAuthUser(authStatus.user)
                }    
            })
            setCheckAuth(true)
        }    
    })

    if (authUser) {
        return <Navigate to={"/"} />
    }
    return children;
}