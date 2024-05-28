import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ThemeContext from '../Context/ThemeContext';

const SettingsScreen = ({ navigation }) => {
    const theme = useContext(ThemeContext);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isNotificationEnabled, setIsNotificationEnabled] = useState(true);

    const handleSignOut = () => {

        Alert.alert('Signed Out', 'You have been signed out.');
    };

    const handleDeleteAccount = () => {

        Alert.alert('Delete Account', 'Your account has been deleted.');
    };

    return (
        <ScrollView style={[styles.container, { backgroundColor: theme.background }]}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="arrow-back" size={24} color={theme.text} />
                </TouchableOpacity>
                <Text style={[styles.headerTitle, { color: theme.text }]}>General Settings</Text>
            </View>
            <TouchableOpacity style={styles.settingItem}>
                <Text style={[styles.settingText, { color: theme.text }]}>Language</Text>
                <Ionicons name="chevron-forward" size={24} color={theme.secondaryText} />
            </TouchableOpacity>
            <View style={styles.settingItem}>
                <Text style={[styles.settingText, { color: theme.text }]}>Dark Mode</Text>
                <Switch
                    value={isDarkMode}
                    onValueChange={setIsDarkMode}
                    trackColor={{ false: '#767577', true: theme.primary }}
                    thumbColor={isDarkMode ? theme.primary : '#f4f3f4'}
                />
            </View>
            <View style={styles.settingItem}>
                <Text style={[styles.settingText, { color: theme.text }]}>Notification</Text>
                <Switch
                    value={isNotificationEnabled}
                    onValueChange={setIsNotificationEnabled}
                    trackColor={{ false: '#767577', true: theme.primary }}
                    thumbColor={isNotificationEnabled ? theme.primary : '#f4f3f4'}
                />
            </View>
            <TouchableOpacity style={styles.settingItem}>
                <Text style={[styles.settingText, { color: theme.text }]}>Block List</Text>
                <Ionicons name="chevron-forward" size={24} color={theme.secondaryText} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingItem}>
                <Text style={[styles.settingText, { color: theme.text }]}>Change Password</Text>
                <Ionicons name="chevron-forward" size={24} color={theme.secondaryText} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingItem} onPress={() => navigation.navigate('TermsAndConditionsScreen')}>
                <Text style={[styles.settingText, { color: theme.text }]}>Terms & Conditions</Text>
                <Ionicons name="chevron-forward" size={24} color={theme.secondaryText} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingItem}>
                <Text style={[styles.settingText, { color: theme.text }]}>Switch To Company Profile</Text>
                <Ionicons name="chevron-forward" size={24} color={theme.secondaryText} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingItem} onPress={() => navigation.navigate('About')}>
                <Text style={[styles.settingText, { color: theme.text }]}>About Us</Text>
                <Ionicons name="chevron-forward" size={24} color={theme.secondaryText} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.settingItem}>
                <Text style={[styles.settingText, { color: theme.text }]}>Delete Account</Text>
                <Ionicons name="chevron-forward" size={24} color={theme.secondaryText} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.signOutButton} onPress={handleSignOut}>
                <Ionicons name="log-out-outline" size={24} color="red" />
                <Text style={[styles.signOutText, { color: 'red' }]}>Sign Out</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 16,
    },
    settingItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    settingText: {
        fontSize: 16,
    },
    signOutButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        marginTop: 20,
        borderTopWidth: 1,
        borderTopColor: '#ddd',
    },
    signOutText: {
        fontSize: 16,
        marginLeft: 8,
    },
});

export default SettingsScreen;
