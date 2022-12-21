import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Welcome } from "../screens/Welcome";
import { SignUp } from "../screens/SignUp";
import { SignIn } from "../screens/SignIn";

const { Navigator, Screen } = createNativeStackNavigator();

export function AuthRoutes() {

    return (
        <Navigator screenOptions={{
            headerShown: false
        }}
            initialRouteName="Welcome"
        >

            <Screen name="Welcome" component={Welcome} />
            <Screen name="SignUp" component={SignUp} />
            <Screen name="SignIn" component={SignIn} />

        </Navigator>
    )

}