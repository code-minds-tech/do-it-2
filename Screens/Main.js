import React from 'react';
import { View, ScrollView, StyleSheet, Button, Text, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import ProfileSection from '../components/ProfileSection';
import Statistics from '../components/Statistics';
import RequestedServices from '../components/RequestedServices';
import Categories from '../components/Categories';
import TopProviders from '../components/TopProviders';
import ThemeContext from '../Context/ThemeContext';
import { Ionicons } from '@expo/vector-icons';


const Main = ({ navigation, setRequestServiceModalVisible }) => {
    const theme = React.useContext(ThemeContext);

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <ScrollView>
                <Header />
                <TouchableOpacity onPress={() => navigation.navigate('SettingsScreen')}>
                    <Ionicons name="settings-outline" size={24} color={theme.text} />
                </TouchableOpacity>
                <ProfileSection />
                <Statistics />
                <View style={styles.headers}>
                    <RequestedServices />
                    <Button title="See All" onPress={() => navigation.navigate('RequestedServices')} />
                </View>

                <TouchableOpacity
                    style={[styles.requestServiceButton, { backgroundColor: theme.button }]}
                    onPress={() => setRequestServiceModalVisible(true)}
                >
                    <Ionicons name="add-circle" size={24} color="black" />
                    <Text style={[styles.requestServiceButtonText, { color: theme.buttonText }]}>Request Service</Text>
                </TouchableOpacity>
                <View style={styles.headers}>
                    <Categories />
                    <Button title="See All" onPress={() => navigation.navigate('Categories')} />
                </View>
                <View style={styles.headers}>
                    <TopProviders />
                    <Button title="See All" onPress={() => navigation.navigate('TopProviders')} />
                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    headers: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        paddingHorizontal: 10,
        marginBottom: 5,
    },
    requestServiceButton: {
        marginHorizontal: 15,
        marginVertical: 10,
        paddingVertical: 15,
        borderRadius: 25,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 75,
    },
    requestServiceButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Main;
