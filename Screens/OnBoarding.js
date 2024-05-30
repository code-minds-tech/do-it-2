
import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import { useNavigation } from '@react-navigation/native';
import ThemeContext from '../Context/ThemeContext';
import { Ionicons } from '@expo/vector-icons';

const OnboardingScreen = () => {
    const navigation = useNavigation();
    const theme = React.useContext(ThemeContext);

    return (
        <Swiper
            loop={false}
            onIndexChanged={(index) => {
                if (index === 2) {
                    setTimeout(() => {
                        navigation.replace('Login');
                    }, 3000);
                }
            }} style={styles.wrapper} showsButtons={true}>
            <View style={[styles.slide, { backgroundColor: theme.background }]}>
                <Image source={require('../assets/icon.png')} style={styles.image} />
                <Text style={[styles.title, { color: theme.primary }]}>Start Your Connections</Text>
                <Text style={[styles.text, { color: theme.text }]}>By Connect With Service Providers & Clients</Text>
                <TouchableOpacity onPress={() => navigation.replace('Login')} style={styles.skipButton}>
                    <Text style={{ color: theme.primary }}>Skip</Text>
                    <Ionicons name="arrow-forward" size={20} color={theme.primary} />
                </TouchableOpacity>
            </View>
            <View style={[styles.slide, { backgroundColor: theme.background }]}>
                <Image source={require('../assets/icon.png')} style={styles.image} />
                <Text style={[styles.title, { color: theme.primary }]}>Build Your Profile & Portfolio</Text>
                <Text style={[styles.text, { color: theme.text }]}>Easily Customize Your Profile & Portfolio To Get More Interaction</Text>
                <TouchableOpacity onPress={() => navigation.replace('Login')} style={styles.skipButton}>
                    <Text style={{ color: theme.primary }}>Skip</Text>
                    <Ionicons name="arrow-forward" size={20} color={theme.primary} />
                </TouchableOpacity>
            </View>
            <View style={[styles.slide, { backgroundColor: theme.background }]}>
                <Image source={require('../assets/icon.png')} style={styles.image} />
                <Text style={[styles.title, { color: theme.primary }]}>Provide & Request Services</Text>
                <Text style={[styles.text, { color: theme.text }]}>Request Or Provide The Service You Want & Start Engagement With Your Clients</Text>
                <TouchableOpacity onPress={() => navigation.replace('Login')} style={styles.skipButton}>
                    <Text style={{ color: theme.primary }}>Login!</Text>
                    <Ionicons name="arrow-forward" size={20} color={theme.primary} />
                </TouchableOpacity>
            </View>
        </Swiper>
    );
};

const styles = StyleSheet.create({
    wrapper: {},
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    image: {
        width: '100%',
        height: '50%',
        resizeMode: 'contain',
        marginBottom: 30,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    text: {
        fontSize: 16,
        textAlign: 'center',
        marginHorizontal: 10,
    },
    button: {
        marginTop: 20,
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#1E90FF',
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    skipButton: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
    },
});

export default OnboardingScreen;
