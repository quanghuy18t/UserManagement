import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import Signup from './src/screens/Signup';
import Welcome from './src/screens/Welcome';
import TabNaviagtion from './src/navigation/TabNaviagtion';
import Profile from './src/screens/Profile';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { enableScreens } from 'react-native-screens';
  
enableScreens(true);

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Welcome'>
          <Stack.Screen 
            name='Welcome'
            component={Welcome}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen 
            name='Bottom'
            component={TabNaviagtion}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen 
            name='Login'
            component={Login}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen 
            name='Signup'
            component={Signup}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen 
            name='Profile'
            component={Profile}
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}