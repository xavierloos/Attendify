import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MenuDrawerNavigator from "./MenuDrawerNavigator";
import { Welcome, SignIn, SignUp, EnterOTP, Forgotpassword, ResetPassword, Profile } from "../screens";
import { ROUTES, COLORS } from "..";

const Stack = createStackNavigator();

const WelcomeStackNavigator = () => {
    const optionsHeaderWithHeight = {
        headerShown: false,
        headerBackTitleVisible: false,
        headerStyle: { height: 150, backgroundColor: COLORS.primary, elevation: 25 }
    }
    const optionsHeader = {
        headerBackTitleVisible: false,
        headerTitleStyle: { display: 'none' },
        headerStyle: {
            backgroundColor: COLORS.brightGrey, elevation: 0, shadowOffset: {
                width: 0, height: 0 // for iOS
            }
        }
    }
    return (
        <Stack.Navigator initialRouteName="Welcome">
            <Stack.Screen name={ROUTES.WELCOME} component={Welcome} options={optionsHeaderWithHeight} />
            <Stack.Screen name={ROUTES.SIGNIN} component={SignIn} options={optionsHeaderWithHeight} />
            <Stack.Screen name={ROUTES.SIGNUP} component={SignUp} options={optionsHeader} />
            <Stack.Screen name={ROUTES.FORGOT_PASS} component={Forgotpassword} options={optionsHeader} />
            <Stack.Screen name={ROUTES.RESET_PASS} component={ResetPassword} options={optionsHeader} />
            {/* HOME STACK */}
            {/* <Stack.Screen name={ROUTES.HOME} component={MenuDrawerNavigator} options={{ headerShown: false }} /> */}
        </Stack.Navigator>
    );
};
export default WelcomeStackNavigator