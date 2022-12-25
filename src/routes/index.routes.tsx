import React from "react";
import { NavigationContainer } from '@react-navigation/native';

import { AuthRoutes } from "./auth.routes";
import { TabRoutes } from "./tab.routes";

import { useAuth } from "../hooks/auth";

export function Routes() {

    const { user } = useAuth();

    return (
        <NavigationContainer>
            {user.token ? <TabRoutes/> : <AuthRoutes />}   
        </NavigationContainer>
    )
}