import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import ThemeContext from '../Context/ThemeContext';

const ProfileSection = () => {
    const theme = React.useContext(ThemeContext);

    return (
        <View style={[styles.profileSection, { backgroundColor: theme.card }]}>
            <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.profilePic} />
            <View>
                <Text style={[styles.welcomeText, { color: theme.text }]}>Welcome Anna!</Text>
                <Text style={[styles.ratingText, { color: theme.secondaryText }]}>⭐ 4.36 (36 Ratings)</Text>
            </View>
            <TouchableOpacity style={[styles.manageButton, { backgroundColor: theme.primary }]}>
                <Text style={styles.manageButtonText}>Manage Services</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    profileSection: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        marginBottom: 10,
    },
    profilePic: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 15,
    },
    welcomeText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    ratingText: {
        color: '#666',
    },
    manageButton: {
        marginLeft: 'auto',
        paddingVertical: 5,
        paddingHorizontal: 15,
        borderRadius: 20,
    },
    manageButtonText: {
        color: '#fff',
    },
});

export default ProfileSection;
