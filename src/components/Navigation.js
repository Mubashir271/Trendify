import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import OnboardingScreen from '../screens/startingscreens/Onboarding1';
import GetStartedScreen from '../screens/startingscreens/GetStarted';
import SplashScreen from '../screens/startingscreens/Splash';
import SignupScreen from '../screens/Auth/Signup';
import SignInScreen from '../screens/Auth/Signin';
import ForgotPassword from '../screens/Auth/ForgotPassword';
import OTP from '../screens/Auth/Otp';
import SecureAccount from '../screens/Auth/SecureAccount';
import Successful from '../screens/Auth/Successful';
import BottomTab from './BottomTab';
import SearchResult from '../screens/HomeScreens/SearchResult';
import ProductsScreen from '../screens/CategoryScreens/ProductsScreen';
import Notification from '../screens/HomeScreens/Notification';
import FilterScreen from '../screens/CategoryScreens/FilterScreen';
import ProductDetails from '../screens/CategoryScreens/ProductDetails';
import OrderDetails from '../screens/HomeScreens/OrderDetails';
import Privacy from '../screens/settings/Privacy';
import MyProfile from '../screens/settings/MyProfile';
import MyNotification from '../screens/settings/MyNotification';
import LinkedAccount from '../screens/settings/LinkedAccount';
import App from '../screens/settings/App';
import AppLanguage from '../screens/settings/AppLanguage';
import Help from '../screens/settings/Help';

const Stack = createStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="GetStarted"
          component={GetStartedScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignupScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPassword}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OTP"
          component={OTP}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SecureAccount"
          component={SecureAccount}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Successful"
          component={Successful}
          options={{headerShown: false}}
        />
                <Stack.Screen
          name="BottomTabs"
          component={BottomTab} // Use BottomTab as the main app screen
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SearchResult"
          component={SearchResult}
          options={{headerShown: false}}
        />
                <Stack.Screen
          name="ProductsScreen"
          component={ProductsScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="FilterScreen"
          component={FilterScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="OrderDetails"
          component={OrderDetails}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Privacy"
          component={Privacy}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyProfile"
          component={MyProfile}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MyNotification"
          component={MyNotification}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LinkedAccount"
          component={LinkedAccount}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="App"
          component={App}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AppLanguage"
          component={AppLanguage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Help"
          component={Help}
          options={{headerShown: false}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
