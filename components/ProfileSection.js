import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import ThemeContext from '../Context/ThemeContext';
import ProgressBar from '../components/ProgressBar';

const ProfileSection = () => {
    const theme = React.useContext(ThemeContext);

    return (
        <View style={[styles.profileSection, { backgroundColor: theme.background }]}>
            <View style={styles.topSection}>
                <Image source={{ uri: 'https://via.placeholder.com/50' }} style={styles.profilePic} />
                <View>
                    <Text style={[styles.welcomeText, { color: theme.text }]}>Good To See You</Text>
                    <Text style={[styles.userNameText, { color: theme.text }]}>Abdelrahman!</Text>
                    <Text style={[styles.ratingText, { color: theme.secondaryText }]}>
                        ⭐ 4.36 (36 Ratings)
                    </Text>
                </View>
                <TouchableOpacity style={[styles.manageButton, { backgroundColor: theme.button }]}>
                    <Text style={{ color: theme.buttonText }}>Complete Profile</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bottomSection}>
                <View style={styles.wrap}>
                    <Text style={[styles.profileStrengthText, { color: theme.text, fontWeight: 'bold' }]}>Profile Strength</Text>
                    <Text style={[styles.percentageText, { color: theme.text }]}>33%</Text>
                </View>
                <ProgressBar progress={33} />

            </View>
        </View >
    );
};

const styles = StyleSheet.create({
    profileSection: {
        padding: 15,
        marginBottom: 10,
        borderRadius: 10,
    },
    topSection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    profilePic: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 15,
    },
    welcomeText: {
        fontSize: 14,
    },
    userNameText: {
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
        fontSize: 12,
    },
    bottomSection: {
        marginTop: 10,
    },
    profileStrengthText: {
        fontSize: 14,
        marginBottom: 1,
    },
    percentageText: {
        fontSize: 14,
    },
    wrap: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
});

export default ProfileSection;