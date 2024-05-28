// Screens/Login.js
import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import AuthContext from '../Context/AuthContext';
import ThemeContext from '../Context/ThemeContext';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useContext(AuthContext);
    const theme = React.useContext(ThemeContext);

    const handleLogin = () => {
        const success = login(email, password);
        if (!success) {
            alert('Invalid credentials');
        }
    };

    return (
        <View style={[styles.container, { backgroundColor: theme.background }]}>
            <View style={styles.logoContainer}>
                <Image source={require('../assets/icon.png')} style={styles.logo} />
                <Text style={[styles.title, { color: theme.text }]}>Log In Your Account</Text>
            </View>
            <View style={styles.inputContainer}>
                <TextInput
                    style={[styles.input, { color: theme.text }]}
                    placeholder="Your email"
                    placeholderTextColor={theme.secondaryText}
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={[styles.input, { color: theme.text }]}
                    placeholder="Your password"
                    placeholderTextColor={theme.secondaryText}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />
            </View>
            <TouchableOpacity onPress={() => { }} style={styles.forgotPassword}>
                <Text style={[styles.forgotPasswordText, { color: theme.primary }]}>Forgot Your Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogin} style={[styles.button, { backgroundColor: theme.primary }]}>
                <Text style={styles.buttonText}>Log In</Text>
            </TouchableOpacity>
            <View style={styles.orContainer}>
                <Text style={[styles.orText, { color: theme.text }]}>Or</Text>
            </View>
            <View style={styles.socialContainer}>
                <TouchableOpacity onPress={() => { }} style={styles.socialButton}>
                    <Image source={require('../assets/icon.png')} style={styles.socialIcon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { }} style={styles.socialButton}>
                    <Image source={require('../assets/icon.png')} style={styles.socialIcon} />
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <Text style={[styles.footerText, { color: theme.text }]}>Don’t Have An Account? </Text>
                <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                    <Text style={[styles.footerLink, { color: theme.primary }]}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 20,
    },
    logo: {
        width: 100,
        height: 100,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 10,
    },
    inputContainer: {
        marginBottom: 20,
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginBottom: 10,
        padding: 10,
    },
    forgotPassword: {
        alignItems: 'flex-end',
        marginBottom: 20,
    },
    forgotPasswordText: {
        fontSize: 14,
    },
    button: {
        padding: 15,
        borderRadius: 25,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    orContainer: {
        alignItems: 'center',
        marginVertical: 20,
    },
    orText: {
        fontSize: 16,
    },
    socialContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 20,
    },
    socialButton: {
        marginHorizontal: 10,
    },
    socialIcon: {
        width: 50,
        height: 50,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    footerText: {
        fontSize: 14,
    },
    footerLink: {
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default LoginScreen;