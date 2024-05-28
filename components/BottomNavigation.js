import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ThemeContext from '../ThemeContext';

const BottomNavigation = () => {
    const theme = React.useContext(ThemeContext);

    return (
        <View style={[styles.bottomNavigation, { backgroundColor: theme.card, borderColor: theme.border }]}>
            <TouchableOpacity style={styles.navItem}>
                <Ionicons name="home-outline" size={30} color={theme.primary} />
                <Text style={[styles.navText, { color: theme.text }]}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}>
                <Ionicons name="chatbubble-outline" size={30} color={theme.text} />
                <Text style={[styles.navText, { color: theme.text }]}>Chat</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.navItem}>
                <Ionicons name="person-outline" size={30} color={theme.text} />
                <Text style={[styles.navText, { color: theme.text }]}>Profile</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    bottomNavigation: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
        borderTopWidth: 1,
    },
    navItem: {
        alignItems: 'center',
    },
    navText: {
        fontSize: 12,
    },
});

export default BottomNavigation;
