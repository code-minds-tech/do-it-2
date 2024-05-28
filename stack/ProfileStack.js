import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../Screens/ProfileScreen';
import ProfileServiceDetailsScreen from '../Screens/ProfileServiceDetialScreen'
import AddServiceScreen from '../Screens/AddServiceScreen';
import EditServiceScreen from '../Screens/EditServiceScreen';

const Stack = createStackNavigator();

const ProfileStack = () => (
    <Stack.Navigator>
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ProfileServiceDetails" component={ProfileServiceDetailsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AddService" component={AddServiceScreen} options={{ headerShown: false }} />
        <Stack.Screen name="EditService" component={EditServiceScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
);

export default ProfileStack;
