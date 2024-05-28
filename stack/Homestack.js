import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Main from '../Screens/Main';
import CategoriesScreen from '../Screens/CategoriesScreen';
import TopProvidersScreen from '../Screens/TopProvidersScreen';
import RequestServiceModal from '../Modal/RequestServiceModal';
import RequestedServicesScreen from '../Screens/RequestedServicesScreen';
import ServiceDetailScreen from '../Screens/ServiceDetailScreen';
import ProfileServiceDetialScreen from '../Screens/ProfileServiceDetialScreen'
import EditServiceScreen from '../Screens/EditServiceScreen';
import AddServiceScreen from '../Screens/AddServiceScreen';
import SettingsScreen from '../Screens/SettingsScreen';
import TermsAndConditionsScreen from '../Screens/TermsAndCond';
import About from '../Screens/About';



const Stack = createStackNavigator();

const HomeStack = ({ navigation }) => {
    const [isRequestServiceModalVisible, setRequestServiceModalVisible] = useState(false);

    const handleRequestServiceSave = () => {
        setRequestServiceModalVisible(false);
        navigation.navigate('RequestedServices');
    };

    const handleRequestServiceClose = () => {
        setRequestServiceModalVisible(false);
    };

    return (
        <>
            <Stack.Navigator>
                <Stack.Screen name="HomeList" options={{ headerShown: false }}>
                    {props => (
                        <>
                            <Main {...props} setRequestServiceModalVisible={setRequestServiceModalVisible} />
                            {isRequestServiceModalVisible && (
                                <RequestServiceModal
                                    visible={isRequestServiceModalVisible}
                                    onClose={handleRequestServiceClose}
                                    onSave={handleRequestServiceSave}
                                />
                            )}
                        </>
                    )}
                </Stack.Screen>
                <Stack.Screen name="Categories" component={CategoriesScreen} options={{ headerShown: false }} />
                <Stack.Screen name="TopProviders" component={TopProvidersScreen} options={{ headerShown: false }} />
                <Stack.Screen name="RequestedServices" component={RequestedServicesScreen} options={{ headerShown: false }} />
                <Stack.Screen name="ServiceDetail" component={ServiceDetailScreen} options={{ headerShown: false }} />
                <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{ headerShown: false }} />
                <Stack.Screen name="TermsAndConditionsScreen" component={TermsAndConditionsScreen} options={{ headerShown: false }} />
                <Stack.Screen name="About" component={About} options={{ headerShown: false }} />
            </Stack.Navigator>
        </>
    );
};

export default HomeStack;
