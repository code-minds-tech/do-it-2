// App.js
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeProvider } from './ThemeProvider';
import MessagesScreen from './Screens/MessagesScreen';
import ChatScreen from './Screens/ChatScreen';
import HomeStack from './stack/Homestack';
import ProfileStack from './stack/ProfileStack';
import FavoriteScreen from './Screens/FavoriteScreen';
import ServiceDetailScreen from './Screens/ServiceDetailScreen';
import { FavoriteProvider } from './Context/FavoriteContext';
import ThemeContext from './Context/ThemeContext';
import OnboardingScreen from './Screens/OnBoarding';
import LoginScreen from './Screens/Login';
import SignupScreen from './Screens/SignUp';
import CreatePasswordScreen from './Screens/CreatePasswordScreen';
import { AuthProvider, useAuth } from './Context/AuthContext';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const FavoriteStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="FavoriteScreen" component={FavoriteScreen} options={{ headerShown: false }} />
    <Stack.Screen name="ServiceDetail" component={ServiceDetailScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const MessagesStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="MessagesList" component={MessagesScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Chat" component={ChatScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);

const AuthStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Onboarding" component={OnboardingScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
    <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }} />
    <Stack.Screen name="CreatePassword" component={CreatePasswordScreen} options={{ headerShown: false }} />
  </Stack.Navigator>
);
const MainApp = () => {
  const theme = React.useContext(ThemeContext);

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home-outline';
          } else if (route.name === 'Messages') {
            iconName = 'chatbubble-outline';
          } else if (route.name === 'Profile') {
            iconName = 'person-outline';
          } else if (route.name === 'Favorite') {
            iconName = 'heart';
          }
          return <Ionicons name={iconName} size={size} color={theme.button} />;
        },
        tabBarActiveTintColor: theme.buttonText,
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {},
        tabBarLabel: ({ focused }) => {
          if (focused) {
            return <Text style={[theme.buttonText, { padding: 5 }]}>{route.name}</Text>;
          } else {
            return null;
          }
        },
        tabBarStyle: {
          height: 70,
          backgroundColor: theme.background,
          borderRadius: 25,
          marginBottom: 15,
        },
        tabBarItemStyle: ({ focused }) => ({
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          padding: 10,
          margin: 5,
          borderRadius: 25,
          backgroundColor: focused ? theme.button : '#333',

        }),
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
      <Tab.Screen name="Messages" component={MessagesStack} options={{ headerShown: false }} />
      <Tab.Screen name="Favorite" component={FavoriteStack} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={ProfileStack} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <ThemeProvider>
        <FavoriteProvider>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaProvider>
              <NavigationContainer>
                <AuthWrapper />
              </NavigationContainer>
            </SafeAreaProvider>
          </GestureHandlerRootView>
        </FavoriteProvider>
      </ThemeProvider>
    </AuthProvider>
  );
};

const AuthWrapper = () => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <MainApp /> : <AuthStack />;
};

export default App;
