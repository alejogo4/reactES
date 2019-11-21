import React from "react";
// import { StackNavigator, DrawerNavigator } from "react-navigation";
import { createDrawerNavigator, createStackNavigator, createAppContainer } from "react-navigation";


import Login from "./screens/Login";
import Menu from  "./screens/Menu";

const Drawer = createDrawerNavigator(
    {
        Login: { screen: Login },

    },
    {
        initialRouteName: "Login",
        contentOptions: {
            activeTintColor: "#e91e63"
        },
        contentComponent: props => <Menu {...props} />

    }
);


const AppNavigator = createStackNavigator(
    {
        Drawer: { screen: Drawer },
        Login: Login,

    },
    {
        initialRouteName: 'Drawer',
        headerMode:"none"
    }
);


export default createAppContainer(AppNavigator);


