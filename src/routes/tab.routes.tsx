import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useTheme } from 'styled-components';


import { Home } from '../screens/Home';
import { Profile } from '../screens/Profile';
import { Configure } from '../screens/Configure';

const { Navigator, Screen } = createMaterialBottomTabNavigator();

export function TabRoutes() {

    const theme = useTheme();

    return (
        <Navigator
            initialRouteName="Home"
            activeColor={theme.colors.background_primary}
            inactiveColor={theme.colors.background_secondary}
            barStyle={
                { 
                    backgroundColor: theme.colors.background_third, 
                    borderTopLeftRadius: 16,
                    borderTopRightRadius: 16,
                    position: 'absolute',
                    overflow: 'hidden',
                }
            }
        >

            <Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />

            <Screen
                name="Agendar"
                component={Home}
                options={{
                    tabBarLabel: 'Agendar',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="calendar-month" color={color} size={26} />
                    ),
                }}
            />

            <Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Perfil',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />

            <Screen
                name="Config"
                component={Configure}
                options={{
                    tabBarLabel: 'Configurações',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="cog" color={color} size={26} />
                    ),
                }}
            />

        </Navigator>
    )

}