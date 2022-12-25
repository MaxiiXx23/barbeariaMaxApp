import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Welcome } from "../screens/Welcome";
import { SignUp } from "../screens/SignUp";
import { SignIn } from "../screens/SignIn";
import { RootStackParamList } from "../navigation/navigationStackProps";

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>();

export function AuthRoutes() {

    return (
        <Navigator screenOptions={{
            headerShown: false
        }}
            initialRouteName="Welcome"
            
        >

            <Screen name="Welcome" component={Welcome} />
            <Screen name="SignUp" component={SignUp} />
            <Screen 
                name="SignIn" 
                component={SignIn} 
                initialParams={{
                    title:"",
                    content:""
                }}
            />

        </Navigator>
    )

}