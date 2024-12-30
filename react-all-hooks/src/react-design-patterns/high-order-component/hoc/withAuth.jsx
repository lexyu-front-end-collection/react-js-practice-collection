import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

/**
 * Logic to chech auth status (DRY)
 App
 -> Dashboard
 -> Login
 -> Profile
 * WithAuth HOC (Common Logic : Accept Component)
 -> AuthDashboard
 -> AuthProfile
 * App
 -> Dashboard -> WithAuth HOC -> AuthenticatedDashboard
 -> Profile -> WithAuth HOC -> AuthenticatedProfile
 */
function withAuth(WrappedComponent) {
    return (props) => {
        const navigate = useNavigate();
        const isAuth = false;

        useEffect(() => {
            console.log("User Authentication: ", isAuth);
            if (!isAuth) {
                console.log("Navigating to home page...");
                navigate("/");
            }
        }, [isAuth, navigate])

        return isAuth ? <WrappedComponent {...props} /> : <div>Not Authenticated</div>
    }
}

export default withAuth;