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
                <View style={styles.providersHeader}>
                    <RequestedServices />
                    <Button title="See All" onPress={() => navigation.navigate('RequestedServices')} />
                </View>

                <TouchableOpacity
                    style={[styles.requestServiceButton, { backgroundColor: theme.primary }]}
                    onPress={() => setRequestServiceModalVisible(true)}
                >
                    <Text style={styles.requestServiceButtonText}>Request Service</Text>
                </TouchableOpacity>
                <View style={styles.categoriesHeader}>
                    <Categories />
                    <Button title="See All" onPress={() => navigation.navigate('Categories')} />
                </View>
                <View style={styles.providersHeader}>
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
    categoriesHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        marginBottom: 10,
    },
    providersHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 15,
        marginBottom: 10,
    },
    requestServiceButton: {
        marginHorizontal: 15,
        marginVertical: 10,
        paddingVertical: 15,
        borderRadius: 25,
        alignItems: 'center',
    },
    requestServiceButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default Main;
