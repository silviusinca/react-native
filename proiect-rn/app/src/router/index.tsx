import React from "react"
import { NavigationContainer } from '@react-navigation/native';
import authRoutes from "./auth.router";
import { useAuth } from "../hooks/authContext";
import userDetailsRoutes from "./userDetails.router";

const Router: React.FC  = () => {
    const auth = useAuth();
    return (
        <NavigationContainer independent={true}>
            {auth.token ? userDetailsRoutes : authRoutes}
        </NavigationContainer>
    )
}

export default Router;