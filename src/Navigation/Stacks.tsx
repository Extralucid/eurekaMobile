import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import DrawerMenu from './DrawerMenu';
import  {Avant, Home, EspaceClient, EspaceIard, EspaceVie, Settings, Help, Chat, Login, Register, Forgot, Otp, Invitee } from '@screens';

const Stack = createStackNavigator();

const options = {
  headerShown: false,
  cardStyle: {
    backgroundColor: 'transparent',
    borderTopLeftRadius: 48,
  },
};

const Stacks = ({}) => (
  <Stack.Navigator initialRouteName='Avant'>
    <Stack.Screen
      name="Avant"
      component={Avant}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="HomeScreen"
      component={DrawerMenu}
      options={{
        headerShown: false,
      }}
    />

    <Stack.Screen
      name="EspaceClient"
      component={EspaceClient}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="EspaceIard"
      component={EspaceIard}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="EspaceVie"
      component={EspaceVie}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Settings"
      component={Settings}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Help"
      component={Help}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Chat"
      component={Chat}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Login"
      component={Login}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Register"
      component={Register}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Forgot"
      component={Forgot}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Otp"
      component={Otp}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name="Invitee"
      component={Invitee}
      options={{
        headerShown: false,
      }}
    />
  </Stack.Navigator>
);

export default Stacks;
